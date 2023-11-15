import { useState } from 'react';
import { useDispatch } from 'react-redux';
import VectorSource from 'ol/source/Vector';
import Vector from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { open, setCN, setCNtoNull } from '../LandInfo/landInfoSlice';
import { useGetActualRentedLandsQuery } from './landsAPI';

export const Layer = ({ map }) => {

  const dispatch = useDispatch();

  const { data, isSuccess } = useGetActualRentedLandsQuery();
  
  const [landsLayer, setL] = useState(new Vector({
    zIndex: 10,
    map: map,
    style: {
      'stroke-width': 0.5,
      'stroke-color': 'black',
      'fill-color': 'rgba(255,155,97,0.29)',
    },
  }));

  if (isSuccess) {
    const f = new GeoJSON().readFeatures(JSON.stringify(data));
    landsLayer.setSource(new VectorSource({ features: f }))
  };
  
  const featureOverlay = new Vector({
    source: new VectorSource(),
    map: map,
    style: {
      'stroke-color': 'rgba(255, 255, 255, 0.7)',
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
  
  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }
    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  const landInfo = function(pixel) {
    const feature = map.forEachFeatureAtPixel(pixel, function(feature) {
      return feature;
    });
    return feature;
  }

  map.on('singleclick', function (evt) {
    const pixel = map.getEventPixel(evt.originalEvent);
    const feat = landInfo(pixel);
    if (feat) {
      dispatch(setCN(feat.get('cadastral_number')));
      dispatch(open())
    } else {
      dispatch(setCNtoNull())
    }
  });


  return null;
}