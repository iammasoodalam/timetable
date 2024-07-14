import styles from "./ScheduleCard.module.scss"

export default function ScheduleCard(
  {
    time_from,
    time_to,
    course_code,
    course_name,
    schedule_type,
    professor
  }: {
    time_from: string,
    time_to: string,
    course_code: string,
    course_name: string,
    schedule_type: string,
    professor: [string]
  }
) {
  return (
    <div className={styles.card}>
      <section className={styles.time_keeper}>
        <time>{time_from}</time>
        <time>{time_to}</time>
      </section>
      <h1 className={styles.course_name}>{course_name}</h1>
      <section className={styles.meta_data}>
        <div>
          {
            (!professor.length) ? "No data present" : professor.map((prof, index) => (
              <p key={index}>{prof}</p>
            ))
          }
        </div>
        <p>{course_code}</p>
      </section>
    </div>
  )
}