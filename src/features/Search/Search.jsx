import styles from './search.module.css'

export const Search = () => {

  return (
    <div className={styles.search_container}>
      <div>
        <input className={styles.searchline} type='search' id='search' name='search' />
        <button className={styles.button}>Поиск</button>
      </div>
    </div>
  )
}
