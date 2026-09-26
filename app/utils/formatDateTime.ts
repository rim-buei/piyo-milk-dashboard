import dayjs from "dayjs";

export default function (isoString: string, timeZone: string): string {
  return dayjs(isoString).tz(timeZone).format("HH:mm");
}
