import React, { useState } from 'react';

import {Map} from './features/Map/Map';
import {Controls} from './features/Controls/Controls';
import {Search} from './features/Search/Search';
import {LandInfo} from './features/LandInfo/LandInfo';

import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { Landusers } from './features/Landusers/Landusers';
import { Layer } from './features/Map/Layer';
import { LandsNotInEGRN } from './features/LandsNotInEGRN/LandsNotInEGRN';
import { NewRecordForm } from './features/NewRecordForm/NewRecordForm';

function App() {
  const landInfoIsOpen = useSelector(state => state.landInfo.isOpen);
  const landusersIsOpen = useSelector(state => state.landusers.isOpen);
  const landsNotInEGRNIsOpen = useSelector(state => state.landsNotInEGRN.isOpen);
  const newRecordFormIsOpen = useSelector(state => state.newRecordForm.isOpen);
  return (
    <main className={styles.main}>
      <Map />
      <div className={styles.left_panel}>
        <Controls />
        { landsNotInEGRNIsOpen && <LandsNotInEGRN />}
        <Search />
      </div>
      <div className={styles.right_panel}>
        { landInfoIsOpen && <LandInfo /> }
        { landusersIsOpen && <Landusers />}
      </div>
      { newRecordFormIsOpen && <NewRecordForm />}
    </main>
  );
}

export default App;
