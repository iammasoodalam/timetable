'use client'
import ScheduleCard from "@/components/ScheduleCard";
import { useState, useEffect, ChangeEvent } from "react";
import styles from './ScheduleUI.module.scss'

export default function ScheduleUI({ data }: { data: data }) {
  const [today, setToday] = useState(0)
  useEffect(() => {
    const day = new Date().getDay()
    if (day === 6 || day === 0) {
      setToday(0)
    } else {
      setToday(day - 1)
    }
  }, [])

  return (
    <>
      <select
        name="day_picker"
        id="day_picker"
        value={today}
        className={styles.day_picker}
        onChange={e => setToday(Number(e.target.value))}
      >
        <option value="0">Monday</option>
        <option value="1">Tuesday</option>
        <option value="2">Wednesday</option>
        <option value="3">Thursday</option>
        <option value="4">Friday</option>
      </select>
      {
        data[today].map((day, index) => (
          <ScheduleCard key={index} {...day} />
        ))
      }
    </>
  )
}