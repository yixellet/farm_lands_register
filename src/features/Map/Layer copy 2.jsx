import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VectorSource from 'ol/source/Vector';
import Vector from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { open, setCN, setCNtoNull } from '../LandInfo/landInfoSlice';
import { useGetActualRentedLandsQuery } from './landsAPI';
import { close } from '../Landusers/landusersSlice';
import { close as ww } from '../LandsNotInEGRN/LandsNotInEGRNSlice';
import { useGetRentsByLanduserQuery } from '../Landusers/RentInfoByUser/RentInfoByUserAPI';

export const Layer3 = ({ map }) => {

  const rentInfoOverlay = new Vector({
    source: new VectorSource(),
    map: map,
    style: {
      'stroke-color': 'rgba(255, 0, 0, 0.4)',
      'stroke-width': 2,
    },
  });

  let highlight;
  const displayFeatureInfo = function (pixel) {
    const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature;
    });
  
    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }
  };

  return null;
}