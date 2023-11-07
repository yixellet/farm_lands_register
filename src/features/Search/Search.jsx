import styles from './search.module.css'

export const Search = () => {

  return (
    <div className={styles.search}>
      <div>
        <input type='search' id='search' name='search' />
        <button>Поиск</button>
      </div>
    </div>
  )
}
