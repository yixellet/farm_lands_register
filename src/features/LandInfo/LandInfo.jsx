import { useDispatch, useSelector } from 'react-redux';
import styles from './landInfo.module.css'
import { useGetAllRentInfoQuery, useGetLandInfoQuery } from './landInfoAPI';
import { useState } from 'react';
import { dateToStr } from '../../utils/dates';

export const LandInfo = () => {
  const dispatch = useDispatch();
  const cn = useSelector(state => state.landInfo.cn);
  const skip = useSelector(state => state.landInfo.skip);

  const [rentSkip, setRentSkip] = useState(true);

  const { data, isSuccess, isloading } = useGetLandInfoQuery(cn, {skip})
  const { data: rent, isSuccess: rentSuccess, isloading: rentLoading } = useGetAllRentInfoQuery(cn, {rentSkip})
  let info;
  if (data && data.length > 0) {
    info = 
    <>
      <h2>{data[0].cadastral_number}</h2>
      <p><span>Адрес: </span>{data[0].location}</p>
      <p><span>Площадь: </span>{data[0].area} кв.м.</p>
      <p><span>Категория: </span>{data[0].cat}</p>
      <p><span>Разрешенное использование: </span>{data[0].permitted_use}</p>
      <p><span>Стоимость: </span>{data[0].cost} руб.</p>
    </>
  } else {
    info = null
  }
  return (
    <div className={styles.land_info}>
      {
        info
      }
      <button onClick={(e) => {e.preventDefault(); setRentSkip(false)}}>Сведения об аренде</button>
      {
        rent &&
        rent.map(r => {
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
