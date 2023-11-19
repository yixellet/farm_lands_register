/* Instruments */
import styles from './LandsNotInEGRN.module.css'
import { useDispatch } from 'react-redux'
import { useGetLandsNotInEGRNQuery } from './LandsNotInEGRNAPI'
import { close } from './LandsNotInEGRNSlice';
import { open, setCN } from '../LandInfo/landInfoSlice';
import { open as ooo } from '../RentInfo/rentInfoSlice';

export const LandsNotInEGRN = () => {
  const dispatch = useDispatch();

  const { data } = useGetLandsNotInEGRNQuery();
  const rr = (c) => {
    dispatch(setCN(c));
    dispatch(open());
    dispatch(ooo())
  }

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={(e) => {e.preventDefault(); dispatch(close())}}>Закрыть</button>
      <ul className={styles.list}>
        {
          data &&
          data.map(d => {
            return <li className={styles.cn_item} key={d.cadastral_number} onClick={() => rr(d.cadastral_number)}>{d.cadastral_number}</li>
          })
        }
      </ul>
    </div>
  )
}
