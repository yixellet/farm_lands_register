import styles from './NewRecordForm.module.css';

export const NewRecordForm = () => {
  
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.header}>Новая запись</h1>
        <div className={styles.fields}>
          <div>
            <label htmlFor='contract'>Договор аренды</label>
            <input type='text' name='contract' />
          </div>
          <fieldset>
            <legend>Срок аренды</legend>
            Начало: <input type='date' />
            Окончание: <input type='date' />
          </fieldset>
        </div>
          <div>
            <label htmlFor='user'>Арендатор</label>
            <input type='text' name='user' />
          </div>
      </form>
    </div>
  )
}
