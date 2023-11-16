import { useDispatch, useSelector } from 'react-redux';
import styles from './rentInfoByUser.module.css'
import { useGetRentsByLanduserQuery } from './RentInfoByUserAPI';
import { dateToStr } from '../../../utils/dates';
import { openClose, setUser } from './RentInfoByUserSlice';
import { useState } from 'react';

export const RentInfoByUser = ({ user, uid }) => {

  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const isOpen = useSelector(state => state.rentInfoByUser.isOpen);
  const uu = useSelector(state => state.rentInfoByUser.user);
  
  const { data } = useGetRentsByLanduserQuery(user, {skip});
  console.log(data)
  return (
    <li className={styles.item}>
      <h2 className={styles.name} 
        onClick={(e) => {
          setSkip(false); 
          dispatch(openClose()); 
          dispatch(setUser(e.target.textContent))
        }}>{user}</h2>
      {
        isOpen && (uu === user) && data &&
        data.map((rent) => {
          return <div key={rent.json_build_object.id}>
            <h4>{rent.json_build_object.properties.l.cadastral_number}</h4>
            <p>{rent.json_build_object.properties.l.area}</p>
            <p>{rent.json_build_object.properties.l.use_type_text}</p>
            <p>{dateToStr(rent.json_build_object.properties.r.rent_from_date)} - {dateToStr(rent.json_build_object.properties.r.rent_to_date)}</p>
          </div>
        })
      }
    </li>
  )
}
