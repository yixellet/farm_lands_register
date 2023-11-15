import { useSelector } from 'react-redux';
import styles from './rentInfo.module.css'
import { useGetAllRentInfoQuery } from './rentInfoAPI';
import { dateToStr } from '../../utils/dates';

export const RentInfo = () => {
  
  const cn = useSelector(state => state.landInfo.cn);

  const { data } = useGetAllRentInfoQuery(cn)

  return (
    <div className={styles.land_info}>
      {
        data &&
        data.map(r => {
          return <div key={r.uid}>
            <h3>{r.name}</h3>
            <p>{r.use_type_class}</p>
            <p>{dateToStr(r.rent_from_date)} - {dateToStr(r.rent_to_date)}</p>
          </div>
        })
      }
    </div>
  )
}
