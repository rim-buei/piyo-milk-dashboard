// @vitest-environment node
import { test, expect } from "vitest";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";

test("formatDateTime", () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  expect(formatDateTime("2026-01-01T00:00:00.000Z", "America/New_York")).toBe("19:00");
  expect(formatDateTime("2026-01-01T00:00:00.000Z", "Asia/Tokyo")).toBe("09:00");
});
