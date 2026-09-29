import type { PiyoLogResponse, PiyoLogRecord } from "types/piyoLog";
import type { Dashboard, Feeding } from "types/dashboard";
import dayjs from "dayjs";

function analyzePiyoLogResponse(response: PiyoLogResponse): Dashboard {
  const config = useRuntimeConfig();

  const today = dayjs().tz(config.public.timeZone).startOf("day");
  const now = dayjs();

  const feedings = response.records
    .filter((record: PiyoLogRecord) => {
      return ["BreastFeeding", "ExpressedBreastMilk", "Formula"].includes(record.type);
    })
    .map((record: PiyoLogRecord): Feeding => {
      return {
        type: record.type,
        dateTime: record.datetime,
        amount: record.value?.value,
      };
    });
  const dailyTotal = feedings
    .filter((feeding: Feeding) => {
      return dayjs(feeding.dateTime) >= today;
    })
    .filter((feeding: Feeding) => {
      return feeding.amount > 0;
    })
    .reduce((acc: number, feeding: Feeding) => {
      return acc + feeding.amount;
    }, 0);
  const lastFeeding = feedings[feedings.length - 1];
  const elapsedMinutes =
    lastFeeding == null ? null : Math.floor((now - dayjs(lastFeeding.dateTime)) / 1000 / 60);

  return {
    dailyTarget: config.public.dailyTarget,
    dailyTotal: dailyTotal,

    feedings: feedings,
    lastFeeding: lastFeeding,

    elapsedMinutes: elapsedMinutes,

    updatedAt: now,
  };
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const feedUrl = config.piyoLogFeedUrl;

  try {
    const response = await $fetch<PiyoLogResponse>(feedUrl);
    return analyzePiyoLogResponse(response);
  } catch (error) {
    console.error("Failed to fetch feeding records from PiyoLog:", error);

    throw createError({
      statusCode: 502,
      statusMessage: `Failed to fetch feed from the external server: ${feedUrl}`,
    });
  }
});
