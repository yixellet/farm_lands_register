import styles from './map.module.css'
import "ol/ol.css";
import { Map as olMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Layer } from './Layer';
import { useEffect, useRef, useState } from 'react';
import { Layer2 } from './Layer copy';

export function Map() {

  const mapRef = useRef(null);


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
  });

  return (
    <div ref={mapRef} className={styles.map} id='map'>
      <Layer map={map} />
      <Layer2 map={map} />
    </div>
  )
}
