import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VectorSource from 'ol/source/Vector';
import Vector from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Select from 'ol/interaction/Select';
import { setCN, setCNtoNull } from '../LandInfo/landInfoSlice';
import { useGetLandsQuery } from './landsAPI';

export const Layer = ({ map }) => {

  const dispatch = useDispatch();
  const { data } = useGetLandsQuery();
  useEffect(() => {
    const landsLayer = new Vector({
      map: map,
      zIndex: 10,
      style: {
        'stroke-width': 0.75,
        'stroke-color': 'red',
        'fill-color': 'rgba(100,100,100,0.09)',
      },
    })
    
    if (data) {
      const vectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(data)
      })
      landsLayer.setSource(vectorSource)
      landsLayer.setMap(map)
    }
    //console.log(data)
    console.log(landsLayer.getSource().getFeatures())
  })
  /*
  const [landsLayer, setLandsLayer] = useState(new Vector({
    map: map,
    zIndex: 10,
    style: {
      'stroke-width': 0.75,
      'stroke-color': 'red',
      'fill-color': 'rgba(100,100,100,0.09)',
    },
  }))
  
  if (data) {
    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(JSON.stringify(data))
    })
    landsLayer.setSource(vectorSource)
  }
*/
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
      dispatch(setCN(feat.get('cn')));
    } else {
      dispatch(setCNtoNull())
    }
  });


  return null;
}