import { useDispatch, useSelector } from 'react-redux';
import styles from './rentInfoByUser.module.css'
import { useGetRentsByLanduserQuery } from './RentInfoByUserAPI';
import { dateToStr } from '../../../utils/dates';
import { open, close, setLands, setUser } from './RentInfoByUserSlice';
import { useState } from 'react';

export const RentInfoByUser = ({ user, type }) => {

  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const isOpen = useSelector(state => state.rentInfoByUser.isOpen);
  const uu = useSelector(state => state.rentInfoByUser.user);
  const { data } = useGetRentsByLanduserQuery(user, {skip});
  return (
    <li className={type === 'act' ? styles.item_act : styles.item_non_act}>
      <h2 className={styles.name} 
        onClick={(e) => {
          if (e.target.textContent === uu) {
            setSkip(true); 
            dispatch(close()); 
            dispatch(setUser(null))
          } else {
            setSkip(false); 
            dispatch(open()); 
            dispatch(setUser(e.target.textContent))
          }
        }}>{user}</h2>
      <ul className={styles.lands_list}>
        {
          isOpen && (uu === user) && data &&
          data.map((rent) => {
            return <li key={rent.json_build_object.id} className={styles.land_item}>
              <h4 className={styles.cn}>{rent.json_build_object.properties.l.cadastral_number}</h4>
              <p className={styles.text}>{rent.json_build_object.properties.l.area} кв.м.</p>
              <p className={styles.text}>{rent.json_build_object.properties.l.use_type_text}</p>
              <p className={styles.text}>{dateToStr(rent.json_build_object.properties.r.rent_from_date)} - {dateToStr(rent.json_build_object.properties.r.rent_to_date)}</p>
            </li>
          })
        }
      </ul>
    </li>
  )
}
