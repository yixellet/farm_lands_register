import { useDispatch, useSelector } from 'react-redux';
import { openClose as dd, close as qq } from '../Landusers/landusersSlice';
import styles from './controls.module.css'
import { toggleArchive } from './ControlsSlice';
import { openClose, close as ww } from '../LandsNotInEGRN/LandsNotInEGRNSlice';
import { close } from '../LandInfo/landInfoSlice';

export const Controls = () => {
  const dispatch = useDispatch();
  const isLandusersOpen = useSelector(state => state.landusers.isOpen);
  const isLandsNotInEGRNOpen = useSelector(state => state.landsNotInEGRN.isOpen);

  return (
    <div className={styles.control_panel}>
      <div className={styles.checkbox_block}>
        <input className={styles.checkbox} type='checkbox' id='archive' name='archive' onChange={(e) => dispatch(toggleArchive(e.target.checked))} />
        <label htmlFor='archive'>Показать архивные данные</label>
      </div>
      <button className={ isLandusersOpen ? `${styles.button} ${styles.button_open}` : `${styles.button} ${styles.button_closed}`}
              onClick={(e) => {e.preventDefault(); dispatch(dd()); dispatch(close()); dispatch(ww())}}>Арендаторы</button>
      <button className={ isLandsNotInEGRNOpen ? `${styles.button} ${styles.button_open}` : `${styles.button} ${styles.button_closed}`}
              onClick={(e) => {e.preventDefault(); dispatch(openClose()); dispatch(close()); dispatch(qq())}}>Участки, отсутствующие в ЕГРН</button>
    </div>
  )
}
