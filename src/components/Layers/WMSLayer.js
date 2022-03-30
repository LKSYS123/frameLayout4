import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";


import OLTileLayer from 'ol/layer/Tile';
import OLTileWMS from 'ol/source/TileWMS';

import OLVectorLayer from "ol/layer/Vector";


const wmsSource = new OLTileWMS({
  url: 'https://ahocevar.com/geoserver/wms',
  params: {'LAYERS': 'ne:ne', 'TILED': true},
  serverType: 'geoserver',
  crossOrigin: 'anonymous',
});

const wmsLayer = ({
  source: wmsSource,
})=>{
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let vectorLayer = new WMSLayer({
      source,
      style
    });

    map.addLayer(vectorLayer);

    vectorLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };

  }, [map]);

  return null;
  
};
//////////////////////
const VectorLayer = ({ source, style, zIndex = 0 }) => {
  
  const { map } = useContext(MapContext);

  useEffect(() => {

    if (!map) return;

    let vectorLayer = new OLVectorLayer({
      source,
      style
    });

    map.addLayer(vectorLayer);

    vectorLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };

  }, [map]);

  return null;
  
};




export default wmsLayer;