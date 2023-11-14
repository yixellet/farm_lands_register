import { useEffect, useState } from 'react';
import VectorSource from 'ol/source/Vector';
import Vector from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { useGetNonActualRentedLandsQuery } from './landsAPI';
import { useSelector } from 'react-redux';

export const Layer2 = ({ map }) => {

  const archive = useSelector(state => state.controls.archive);

  const { data, isSuccess } = useGetNonActualRentedLandsQuery();
  
  const [landsLayer, setL] = useState(new Vector({
    zIndex: 10,
    map: map,
    style: {
      'stroke-width': 0.5,
      'stroke-color': 'black',
      'fill-color': 'rgba(100,100,100,0.29)',
    },
  }));

  landsLayer.setVisible(archive)
  if (isSuccess) {
    const f = new GeoJSON().readFeatures(JSON.stringify(data));
    landsLayer.setSource(new VectorSource({ features: f }))
  };

  return null;
};
