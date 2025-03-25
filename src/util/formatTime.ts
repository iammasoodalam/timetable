export default function formatTime(time24: string): string {
  let [startHrs, startMin] = time24.split(":");
  let period = "AM";
  let hrs12 = parseInt(startHrs, 10);

  if (hrs12 >= 12) {
    period = "PM";
    if (hrs12 > 12) {
      hrs12 -= 12;
      startHrs = hrs12.toString();
    }
  } else if (hrs12 === 12) {
    startHrs = "12";
  }

  if (hrs12 < 10) {
    startHrs = `0${hrs12}`;
  }
  const formattedTime = `${startHrs}:${startMin} ${period}`;
  return formattedTime;
}
