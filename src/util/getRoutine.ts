import fs from "fs";
import path from "path";

type data = [
  [
    {
      time_from: string;
      time_to: string;
      course_code: string;
      course_name: string;
      schedule_type: string;
      professor: [string];
    }
  ]
];

export default function getRoutine(): data {
  const routine = fs.readFileSync(
    path.join(process.cwd(), "src/data/cse_sem_5.json"),
    "utf-8"
  );
  return JSON.parse(routine);
}
