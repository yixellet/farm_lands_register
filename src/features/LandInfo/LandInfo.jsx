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

  const { data, isFetching } = useGetLandInfoQuery(cadastral_number, {skip})
  
  let info;
  if (data && data.length > 0) {
    info = 
    <div className={styles.info}>
      <h2 className={styles.cn}>{data[0].cadastral_number}</h2>
      <p><span className={styles.span}>Адрес: </span>{data[0].location}</p>
      <p><span className={styles.span}>Площадь: </span>{data[0].area} кв.м.</p>
      <p><span className={styles.span}>Категория: </span>{data[0].cat}</p>
      <p><span className={styles.span}>Разрешенное использование: </span>{data[0].permitted_use}</p>
      <p><span className={styles.span}>Стоимость: </span>{data[0].cost} руб.</p>
    </div>
  } else {
    info = null
  }
  return (
    <div className={styles.land_info}>
      <button className={styles.closeButton} onClick={(e) => {e.preventDefault(); dispatch(close())}}>Закрыть</button>
      {
        isFetching && <div className={styles.isFetching}><p>ЗАГРУЗКА...</p></div>
      }
      {
        info
      }
      <button className={ isRentInfoOpen ? `${styles.button} ${styles.button_open}` : `${styles.button} ${styles.button_closed}`}
              onClick={(e) => {e.preventDefault(); dispatch(openClose())}}>Сведения об аренде</button>
      {
        isRentInfoOpen &&
        <RentInfo />
      }
    </div>
  )
}
