'use client'
import styles from './scheduleCard.module.scss'
import React, { useState, useEffect, useRef } from 'react'

export default function ScheduleCard(
  {
    timeFrom,
    timeTo,
    subject,
    courseCode,
    professor
  }: TData) {

  const [data, setData] = useState({
    timeFrom, timeTo, subject, courseCode, professor
  })

  const start = useRef(timeFrom)
  let dialog: HTMLDialogElement;

  useEffect(() => {
    dialog = document.getElementById("dialog") as HTMLDialogElement
  }, [])

  const changeData = () => {
    if (dialog) {
      dialog.showModal();
    }
  }
  const changeCardData = (e: React.FormEvent) => {
    console.log((e.target as any).timeFrom.value)
  }
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.time}>
          <span className={styles.timeFrom}>{data.timeFrom}</span>
          <span> - </span>
          <span className={styles.timeTo}>{data.timeTo}</span>
        </div>
        <div><button className={styles.modify} onClick={changeData}>Modify</button></div>
      </header>
      <div className={styles.cardBody}>
        <p className={styles.subject}>{data.subject}</p>
        <div className={styles.footer}>
          <p className={styles.professor}>{data.professor}</p>
          <p className={styles.courseCode}>{data.courseCode}</p>
        </div>
      </div>
      <dialog id='dialog' className={styles.dialog}>
        <p className={styles.editTitle}>Edit Period Data</p>
        <form method='dialog' onSubmit={changeCardData}>
          <div className={styles.inputChangePeriod}>
            <label htmlFor="timeFrom">From: </label>
            <input type="text" name="timeFrom" id="timeFrom" />
          </div>
          <div className={styles.inputChangePeriod}>
            <label htmlFor="timeTo">To: </label>
            <input type="text" name="timeTo" id="timeTo" />
          </div>
          <div className={styles.inputCancelPeriod}>
            <input type="checkbox" name="classCancelled" id="classCancelled" />
            <label htmlFor="classCancelled">Class Cancelled</label>
          </div>
          <div className={styles.dialogButtons}>
            <button id='cancel' type='reset' onClick={() => (dialog.close())}>Cancel</button>
            <button type='submit'>Sumit</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export function Holiday() {
  return (
    <div className={styles.holiday}>
      UNIVERSAL HOLIDAY
    </div>
  )
}