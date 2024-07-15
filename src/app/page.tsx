import ScheduleUI from "@/components/ScheduleUI"
import getRoutine from "@/util/getRoutine";
import Script from "next/script";

export default function Home() {
  const data = getRoutine()

  return (
    <>
      <Script src="/register-sw.js" />
      <main>
        <ScheduleUI data={data} />
      </main>
    </>
  );
}
