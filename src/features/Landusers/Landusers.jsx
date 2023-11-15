/* Instruments */
import styles from './Landusers.module.css'
import { useDispatch } from 'react-redux'
import { close, open } from './landusersSlice'
import { useGetLandusersQuery } from './landusersAPI'

export const Landusers = () => {
  const dispatch = useDispatch();

  const { data } = useGetLandusersQuery();

  return (
    <div className={styles.container}>
      <button onClick={(e) => {e.preventDefault(); dispatch(close())}}>Закрыть</button>
      <ul className={styles.list}>
        {
          data &&
          data.map(d => {
            return <li key={d.uid} className={styles.item}>{d.name}</li>
          })
        }
      </ul>
    </div>
  )
}
