/* Instruments */
import styles from './Landusers.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { close } from './landusersSlice'
import { useGetActualLandusersQuery, useGetNonActualLandusersQuery } from './landusersAPI'
import { RentInfoByUser } from './RentInfoByUser/RentInfoByUser'

export const Landusers = () => {
  const dispatch = useDispatch();
  const archive = useSelector(state => state.controls.archive);
  const { data } = useGetActualLandusersQuery();
  const { data: non_act } = useGetNonActualLandusersQuery('q',{skip: !archive})

  return (
    <div className={styles.container}>
      <button onClick={(e) => {e.preventDefault(); dispatch(close())}} 
              className={styles.closeButton}>Закрыть</button>
      <ul className={styles.list}>
        {
          data &&
          data.map(d => { return <RentInfoByUser key={d.user_text} user={d.user_text} uid={d.uid} type='act' /> })
        }
        {
          non_act && archive &&
          non_act.map(d => { return <RentInfoByUser key={d.user_text} user={d.user_text} uid={d.uid} type='non_act' /> })
        }
      </ul>
    </div>
  )
}
