import { useDispatch } from 'react-redux';
import { openClose as dd } from '../Landusers/landusersSlice';
import styles from './controls.module.css'
import { toggleArchive } from './ControlsSlice';
import { openClose } from '../LandsNotInEGRN/LandsNotInEGRNSlice';

export const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.control_panel}>
      <div>
        <input type='checkbox' id='archive' name='archive' onChange={(e) => dispatch(toggleArchive(e.target.checked))} />
        <label htmlFor='archive'>Показать архивные данные</label>
      </div>
      <button onClick={(e) => {e.preventDefault(); dispatch(dd())}}>Арендаторы</button>
      <button onClick={(e) => {e.preventDefault(); dispatch(openClose())}}>Участки, отсутствующие в ЕГРН</button>
    </div>
  )
}
