'use client'
import ScheduleCard, { Holiday } from '@/Components/scheduleCard'
import styles from './home.module.scss'
import React, { useState, useEffect } from 'react'

export default function Main({ data }: { data: Array<Array<TData>> }) {
  const [day, setDay] = useState(1)
  const d = new Date();
  useEffect(() => {
    setDay(d.getDay())
  }, [])
  const changeDay = (event: any) => { // I don't know, what will be the type of the event
    setDay(event.target.value)
  }
  return (
    <main className={styles.main}>
      <select name='day' id='day' value={day} className={styles.daySelection} onChange={changeDay}>
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