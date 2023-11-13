import styles from './map.module.css'
import "ol/ol.css";
import { Map as olMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Layer } from './Layer';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { open } from '../LandInfo/landInfoSlice';
import { addMap } from './MapSlice';

export function Map(props) {

  const mapRef = useRef(null);

  const dispatch = useDispatch()

  const [view, setView] = useState(new View({
    center: fromLonLat([46,47.15]),
    zoom: 8,
  }));

  const [OSMLayer, setOSMLayer] = useState(new TileLayer({
    source: new OSM(),
    zIndex: 0,
  }))

  const [map, setMap] = useState(new olMap({
    controls: [],
    view: view,
    layers: [
      OSMLayer
    ]
  }));

  useEffect(() => {
    map.setTarget(mapRef.current);
    dispatch(addMap(map));
  });

  return (
    <div ref={mapRef} className={styles.map} id='map'>
      {props.children}
    </div>
  )
}
