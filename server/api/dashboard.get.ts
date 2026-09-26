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
    .filter((record: PiyoLogRecord) => {
      return dayjs(record.datetime) >= today;
    })
    .map((record: PiyoLogRecord): Feeding => {
      return {
        type: record.type,
        datetime: record.datetime,
        amount: record.value?.value,
      };
    });
  const lastFeeding = feedings[feedings.length - 1];
  const elapsedMinutes = Math.floor((now - dayjs(lastFeeding.datetime)) / 1000 / 60);

  return {
    dailyTarget: config.dailyTarget,
    dailyTotal: feedings
      .filter((feeding: Feeding) => {
        return feeding.amount > 0;
      })
      .reduce((acc: number, feeding: Feeding) => {
        return acc + feeding.amount;
      }, 0),

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
