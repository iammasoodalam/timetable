import styles from './scheduleCard.module.scss'

export default function ScheduleCard(
  {
    timeFrom,
    timeTo,
    subject,
    courseCode,
    professor
  }: {
    timeFrom: string,
    timeTo: string,
    subject: string,
    courseCode: string,
    professor: string,
  }) {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.time}>
          <span className={styles.timeFrom}>{timeFrom}</span>
          <span> - </span>
          <span className={styles.timeTo}>{timeTo}</span>
        </div>
        <div><button className={styles.modify}>Modify</button></div>
      </header>
      <div className={styles.cardBody}>
        <p className={styles.subject}>{subject}</p>
        <div className={styles.footer}>
          <p className={styles.professor}>{professor}</p>
          <p className={styles.courseCode}>{courseCode}</p>
        </div>
      </div>
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