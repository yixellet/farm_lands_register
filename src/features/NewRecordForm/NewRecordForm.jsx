import styles from './NewRecordForm.module.css';

export const NewRecordForm = () => {
  
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.header}>Новая запись</h1>
        <div className={styles.fields}>
          <fieldset className={styles.fieldset}>
            <legend>Договор</legend>
            Номер <input type='text' />
            Дата <input type='date' />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend>Срок</legend>
            Начало <input type='date' />
            Окончание <input type='date' />
          </fieldset>
          <div>
            <label htmlFor='user'>Арендатор</label>
            <input type='text' name='user' />
          </div>
          <fieldset className={styles.fieldset}>
            <legend>Земельный участок</legend>
            Кадастровый номер <input type='text' />
            Кадастровая выписка (XML-файл) <input type='file' accept='xml' />
          </fieldset>
        </div>
        <div className={styles.buttons_container}>
          <input type='reset' />
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}
