import { useSelector } from 'react-redux';
import styles from './rentInfo.module.css'
import { useGetAllRentInfoQuery } from './rentInfoAPI';
import { dateToStr } from '../../utils/dates';

export const RentInfo = () => {
  
  const cn = useSelector(state => state.landInfo.cn);

  const { data } = useGetAllRentInfoQuery(cn)

  return (
    <ol className={styles.rent_info}>
      {
        data &&
        data.map(r => {
          return <li key={r.uid} className={styles.item}>
            <h3 className={styles.landuser}>{r.name}</h3>
            <p>{dateToStr(r.rent_from_date)} - {dateToStr(r.rent_to_date)}</p>
          </li>
        })
      }
    </ol>
  )
}
