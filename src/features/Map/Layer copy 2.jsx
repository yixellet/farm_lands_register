import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VectorSource from 'ol/source/Vector';
import Vector from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { open, setCN, setCNtoNull } from '../LandInfo/landInfoSlice';
import { useGetActualRentedLandsQuery } from './landsAPI';
import { close } from '../Landusers/landusersSlice';
import { close as ww } from '../LandsNotInEGRN/LandsNotInEGRNSlice';
import { useGetRentsByLanduserQuery, useGetRentsGeomByLanduserQuery } from '../Landusers/RentInfoByUser/RentInfoByUserAPI';

export const Layer3 = ({ map }) => {

  const user = useSelector(state => state.rentInfoByUser.user);

  let skip;
  if (user) {
    skip = false
  } else {
    skip = true
  }

  const { data, isSuccess } = useGetRentsByLanduserQuery(user, { skip })

  const rentInfoOverlay = new Vector({
    source: new VectorSource(),
    map: map,
    style: {
      'stroke-color': 'rgba(255, 0, 0, 0)',
      'fill-color':  'rgba(255, 0, 0, 0.4)',
      'stroke-width': 2,
    },
  });

  if (isSuccess) {
    rentInfoOverlay.getSource().clear()
    data.forEach((f) => {
      const ff = new GeoJSON().readFeature(f.json_build_object)
      rentInfoOverlay.getSource().addFeature(ff)
    })
    console.log(map.getAllLayers()) 
  }
/*
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
*/
  return null;
}