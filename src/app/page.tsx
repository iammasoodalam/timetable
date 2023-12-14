import fs from 'fs'
import path from 'path'
import styles from './home.module.scss'
import ScheduleCard, { Holiday } from '@/Components/scheduleCard'


export default function Page() {
  type TData = {
    timeFrom: string;
    timeTo: string;
    courseCode: string;
    subject: string;
    professor: string;
  }
  const d = new Date();
  const day = d.getDay();
  const file = fs.readFileSync(path.join(process.cwd(), 'src/lib', 'data.json'), 'utf-8')
  const data = JSON.parse(file) as Array<Array<TData>>

  return (
    <main className={styles.main}>
      <select name='day' id='day' className={styles.daySelection}>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
      </select>
      {(day == 0 || day == 6) ? <Holiday /> : data[day - 1].map(period => <ScheduleCard {...period} key={period.courseCode} />)}
    </main>
  )
}