/* Instruments */
import styles from './LandsNotInEGRN.module.css'
import { useDispatch } from 'react-redux'
import { useGetLandsNotInEGRNQuery } from './LandsNotInEGRNAPI'
import { close } from './LandsNotInEGRNSlice';
import { setCN } from '../LandInfo/landInfoSlice';

export const LandsNotInEGRN = () => {
  const dispatch = useDispatch();

  const { data } = useGetLandsNotInEGRNQuery();

  return (
    <div className={styles.container}>
      <button onClick={(e) => {e.preventDefault(); dispatch(close())}}>Закрыть</button>
      <ul className={styles.list}>
        {
          data &&
          data.map(d => {
            return <li key={d.cadastral_number} onClick={() => dispatch(setCN(d.cadastral_number))}>{d.cadastral_number}</li>
          })
        }
      </ul>
    </div>
  )
}
