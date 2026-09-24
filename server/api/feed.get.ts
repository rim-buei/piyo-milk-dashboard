import type { PiyoLogResponse } from "types/feed";

function filterPiyoLogResponse(response: PiyoLogResponse) {
  const now = new Date();
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(now);
  const start = new Date(`${today}T00:00:00+09:00`);

  return response.records
    .filter((record) => {
      return ["BreastFeeding", "Formula"].includes(record.type);
    })
    .filter((record) => {
      return new Date(record.datetime) >= start;
    });
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  try {
    const response = await $fetch<PiyoLogResponse>(config.piyoLogFeedUrl);
    return filterPiyoLogResponse(response);
  } catch (error) {
    console.error("Failed to fetch feeding records from PiyoLog:", error);

    throw createError({
      statusCode: 502,
      statusMessage: "Failed to fetch feed from the external server",
    });
  }
});
