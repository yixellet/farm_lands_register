import { useDispatch, useSelector } from 'react-redux';
import styles from './landInfo.module.css'
import { useGetAllRentInfoQuery, useGetLandInfoQuery } from './landInfoAPI';
import { useState } from 'react';

export const LandInfo = () => {
  const dispatch = useDispatch();
  const cn = useSelector(state => state.landInfo.cn);
  const skip = useSelector(state => state.landInfo.skip);

  const [rentSkip, setRentSkip] = useState(true);

  const { data, isSuccess, isloading } = useGetLandInfoQuery(cn, {skip})
  const { data: rent, isSuccess: rentSuccess, isloading: rentLoading } = useGetAllRentInfoQuery(cn, {rentSkip})

  return (
    <div className={styles.land_info}>
      {
        data &&
        <>
          <h2>{data[0].cn}</h2>
          <p><span>Адрес: </span>{data[0].location}</p>
          <p><span>Площадь: </span>{data[0].area} кв.м.</p>
          <p><span>Категория: </span>{data[0].cat}</p>
          <p><span>Стоимость: </span>{data[0].cost} руб.</p>
        </>
      }
      <button onClick={(e) => {e.preventDefault(); setRentSkip(false)}}>Сведения об аренде</button>
      {
        rent &&
        rent.map(r => {
          return <div key={r.uid}>
            <h3>{r.name}</h3>
            <p>{r.use_type_class}</p>
            <p>{r.rent_from_date} - {r.rent_to_date}</p>
          </div>
        })
      }
    </div>
  )
}
