"use client";
import styles from "./ScheduleCard.module.scss";
import { useState, useRef, ChangeEvent } from "react";

export default function ScheduleCard(day: cardData) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [data, setData] = useState<cardData>(day);
  const [formData, setFormData] = useState(data);

  function editCard() {
    dialogRef.current?.showModal();
  }

  function updateData(e: ChangeEvent<HTMLInputElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function cancelUpdate(e: React.MouseEvent<HTMLButtonElement>) {
    setFormData(data)
    dialogRef.current?.close()
  }

  function confirmUpdate(e: React.MouseEvent<HTMLButtonElement>) {
    setData(formData)
    dialogRef.current?.close()
  }

  return (
    <div
      className={
        data.schedule_type == "lecture"
          ? styles.card
          : `${styles.card_lab} ${styles.card}`
      }
    >
      <section className={styles.header}>
        <div className={styles.time_keeper}>
          <time>{data.time_from}</time>
          {" => "}
          <time>{data.time_to}</time>
        </div>
        <div>
          <button onClick={editCard}>Edit</button>
        </div>
      </section>
      <h1 className={styles.course_name}>{data.course_name}</h1>
      <section className={styles.meta_data}>
        <div>
          {!data.professor.length
            ? "No data present"
            : data.professor.map((prof, index) => <p key={index}>{prof}</p>)}
        </div>
        <p>{data.course_code}</p>
      </section>
      <dialog className={styles.modal} ref={dialogRef}>
        <form method="dialog" className={styles.updateCardForm}>
          <div className={styles.change_time}>
            <label className={styles.formLabel} htmlFor="time_from">
              Time
            </label>
            <div className={styles.time_inputs}>
              <input
                className={styles.formInput}
                onChange={updateData}
                value={formData.time_from}
                type="time"
                name="time_from"
                id="time_from"
              />
              <span>{" => "}</span>
              <input
                className={styles.formInput}
                onChange={updateData}
                value={formData.time_to}
                type="time"
                name="time_to"
                id="time_to"
              />
            </div>
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="course_name">
              Course:{" "}
            </label>
            <input
              className={styles.formInput}
              onChange={updateData}
              value={formData.course_name}
              type="text"
              spellCheck="false"
              name="course_name"
              id="course_name"
            />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="course_code">
              Course Code:{" "}
            </label>
            <input
              className={styles.formInput}
              onChange={updateData}
              value={formData.course_code}
              type="text"
              spellCheck="false"
              name="course_code"
              id="course_code"
            />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="professor">
              Professor:{" "}
            </label>
            <input
              className={styles.formInput}
              onChange={updateData}
              value={formData.professor}
              type="text"
              spellCheck="false"
              name="professor"
              id="professor"
            />
          </div>
          <div>
            <button type="reset" onClick={cancelUpdate}>Cancel</button>
            <button type="submit" onClick={confirmUpdate}>Update</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
