import ScheduleUI from "@/components/ScheduleUI";
import getRoutine from "@/util/getRoutine";

export default function Home() {
  const data = getRoutine()
  return (
    <main>
      {
        <ScheduleUI data={data} />
      }
    </main>
  );
}
