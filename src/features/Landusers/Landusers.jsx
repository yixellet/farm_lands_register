/* Instruments */
import styles from './Landusers.module.css'
import { useDispatch } from 'react-redux'
import { close } from './landusersSlice'
import { useGetLandusersQuery } from './landusersAPI'
import { RentInfoByUser } from './RentInfoByUser/RentInfoByUser'

export const Landusers = () => {
  const dispatch = useDispatch();

  const { data } = useGetLandusersQuery();

  return (
    <div className={styles.container}>
      <button onClick={(e) => {e.preventDefault(); dispatch(close())}}>Закрыть</button>
      <ul className={styles.list}>
        {
          data &&
          data.map(d => { return <RentInfoByUser key={d.uid} user={d.name} uid={d.uid} /> })
        }
      </ul>
    </div>
  )
}
