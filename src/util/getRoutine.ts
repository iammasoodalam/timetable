import fs from "fs";
import path from "path";

export default function getRoutine(): data {
  const routine = fs.readFileSync(
    path.join(process.cwd(), "src/data/cse_sem_7.json"),
    "utf-8"
  );
  return JSON.parse(routine);
}
