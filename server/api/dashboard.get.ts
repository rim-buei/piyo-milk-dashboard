import type { PiyoLogResponse, PiyoLogRecord } from "types/piyoLog";
import type { Dashboard, Feeding } from "types/dashboard";

function analyzePiyoLogResponse(response: PiyoLogResponse): Dashboard {
  const config = useRuntimeConfig();

  const now = new Date();
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(now);
  const start = new Date(`${today}T00:00:00+09:00`);

  const feedings = response.records
    .filter((record: PiyoLogRecord) => {
      return ["BreastFeeding", "Formula"].includes(record.type);
    })
    .filter((record: PiyoLogRecord) => {
      return new Date(record.datetime) >= start;
    })
    .map((record: PiyoLogRecord): Feeding => {
      return {
        datetime: record.datetime,
        amount: record.value.value,
      };
    });
  const lastFeeding = feedings[feedings.length - 1];
  const elapsedMinutes = Math.floor((now - new Date(lastFeeding.datetime).getTime()) / 1000 / 60);

  return {
    dailyTarget: config.dailyTarget,
    dailyTotal: feedings.reduce((acc, feeding) => {
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
