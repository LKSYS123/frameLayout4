import { useContext, useEffect } from 'react';
import MapContext from '../Map/MapContext';
import OLVectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

const VectorLayer = ({ source, style, zIndex = 0 }) => {
    const { map } = useContext(MapContext);

    const tml_Block_GeoJson = new VectorSource({
        format: new GeoJSON(),
        url: function (extent) {
            //console.log("tml_cd", {tml_cd});
            var strUrl =
                'http://192.168.1.49:8080/geoserver/all_Tml_blk_StoreName/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=all_Tml_blk_StoreName%3AAll_Tml_Blk_View_SQL&maxFeatures=10000&outputFormat=application%2Fjson' +
                '&viewparams=tml_cd_bl:' +
                'ICO';
            // `${tml_cd2}`;
            //console.log("strUrl", strUrl.toString());
            return strUrl;
        },
    });

    useEffect(() => {
        if (!map) return;

        let vectorLayer = new OLVectorLayer({
            source,
            style,
        });

        map.addLayer(vectorLayer);

        vectorLayer.setZIndex(zIndex);

        return () => {
            if (map) {
                map.removeLayer(vectorLayer);
            }
        };
    }, [map, source, style, zIndex]);

    return null;
};

export default VectorLayer;
