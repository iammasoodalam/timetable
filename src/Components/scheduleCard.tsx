'use client'
import styles from './scheduleCard.module.scss'
import React, { useState, useEffect } from 'react'

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
  let dialog: HTMLDialogElement;
  useEffect(() => {
    dialog = document.getElementById("dialog") as HTMLDialogElement
  }, [])
  const changeData = () => {
    if (dialog) {
      dialog.showModal();
    }
  }
  const changeInput = (e: any) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
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
        <form method='dialog'>
          <div className={styles.inputChangePeriod}>
            <label htmlFor="timeFrom">From: </label>
            <input type="text" name="timeFrom" id="timeFrom" value={data.timeFrom} onChange={changeInput} />
          </div>
          <div className={styles.inputChangePeriod}>
            <label htmlFor="timeTo">To: </label>
            <input type="text" name="timeTo" id="timeTo" value={data.timeTo} onChange={changeInput} />
          </div>
          <div className={styles.inputChangePeriod}>
            <label htmlFor="subject">Subject: </label>
            <input type="text" name="subject" id="subject" value={data.subject} onChange={changeInput} />
          </div>
          <div className={styles.inputChangePeriod}>
            <label htmlFor="professor">Professor: </label>
            <input type="text" name="professor" id="professor" value={data.professor} onChange={changeInput} />
          </div>
          <div className={styles.inputChangePeriod}>
            <label htmlFor="courseCode">Course Code: </label>
            <input type="text" name="courseCode" id="courseCode" value={data.courseCode} onChange={changeInput} />
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