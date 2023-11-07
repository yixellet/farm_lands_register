import { useDispatch } from 'react-redux';
import { open } from '../Landusers/landusersSlice';
import styles from './controls.module.css'

export const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.control_panel}>
      <div>
        <input type='checkbox' id='archive' name='archive' />
        <label htmlFor='archive'>Показать архивные данные</label>
      </div>
      <button onClick={(e) => {e.preventDefault(); dispatch(open())}}>Арендаторы</button>
      <button>Участки, отсутствующие в ЕГРН</button>
    </div>
  )
}
