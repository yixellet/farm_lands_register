import { useDispatch, useSelector } from 'react-redux';
import styles from './landInfo.module.css'
import { useGetLandInfoQuery } from './landInfoAPI';
import { RentInfo } from '../RentInfo/RentInfo';
import { openClose } from '../RentInfo/rentInfoSlice'
import { close } from './landInfoSlice';

export const LandInfo = () => {

  const dispatch = useDispatch();
  const cadastral_number = useSelector(state => state.landInfo.cn);
  const skip = useSelector(state => state.landInfo.skip);
  const isRentInfoOpen = useSelector(state => state.rentInfo.isOpen);

  const { data } = useGetLandInfoQuery(cadastral_number, {skip})
  
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
      <button onClick={(e) => {e.preventDefault(); dispatch(close())}}>Закрыть</button>
      {
        info
      }
      <button onClick={(e) => {e.preventDefault(); dispatch(openClose())}}>Сведения об аренде</button>
      {
        isRentInfoOpen &&
        <RentInfo />
      }
    </div>
  )
}
