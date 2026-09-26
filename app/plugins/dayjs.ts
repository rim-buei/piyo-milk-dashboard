import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";

export default defineNuxtPlugin(() => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
});
