import React, { useRef, useState, useEffect } from "react"
import { Container, makeStyles} from "@material-ui/core";
import { Routes, Route, Outlet } from "react-router-dom";

import "../components/Map/Map.css";
import MapContext from "../components/Map/MapContext";
import * as ol from "ol";


//https://www.youtube.com/watch?v=YEmtzxfUzA0
//https://medium.com/swlh/how-to-incorporate-openlayers-maps-into-react-65b411985744


import '../App.css'
import Map from '../components/Map/Map'
import Layers from '../components/Layers/Layers'
import TileLayer from '../components/Layers/TileLayer'
import VectorLayer from '../components/Layers/VectorLayer'
import Controls from '../components/Controls/Controls'
import FullScreenControl from '../components/Controls/FullScreenControl'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { osm, vector } from '../components/Source'

import GeoJSON from 'ol/format/GeoJSON'
import VectorSource from 'ol/source/Vector'
import { bbox as bboxStrategy } from 'ol/loadingstrategy'

import { fromLonLat } from 'ol/proj'
import { boundingExtent, getCenter } from 'ol/extent'
const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    },
}));

let styles = {
    MultiPolygon: new Style({
        stroke: new Stroke({
            color: 'blue',
            width: 1,
        }),
        fill: new Fill({
            color: 'rgba(0, 0, 255, 0.1)',
        }),
    }),
    Polygon: new Style({
        // 테두리
        stroke: new Stroke({
            color: 'blue',
            lineDash: [50],
            width: 2,
        }),
        // 내부 색상
        fill: new Fill({
            color: 'rgba(0, 0, 255, 0.1)',
        }),
        // 주석
        text: new Text({
            font: '20px Calibri,sans-serif',
            fill: new Fill({
                color: 'rgba(255, 255, 255, 1)',
            }),
            backgroundFill: new Fill({
                color: 'rgba(100, 0, 0, 0.7)',
            }),
            scale: [1, 1],
            padding: [5, 5, 5, 5],
            offsetX: 0,
            offsetY: 0,
            text: '텍스트',
        }),
    }),
}

var tml_cd1 = 'GEFCO'
var tml_cd2 = 'ICO'

const XXXXextent = boundingExtent([
    // fromLonLat([4.2039, 51.2875]),
    // fromLonLat([4.2506, 51.2547]),
    fromLonLat([4.114, 51.2862]),
    fromLonLat([4.3445, 51.2544]),
])

//conasdfasdfasdfasdfst [center, setCenter] = useState([4.228669, 51.269036]);  // 유럽 ICO

const XXXCenter = getCenter(XXXXextent)

var tml_Block_GeoJson = new VectorSource({
    format: new GeoJSON(),
    url: function (extent) {
        //console.log("tml_cd", {tml_cd});
        var strUrl =
            'http://192.168.1.49:8080/geoserver/all_Tml_blk_StoreName/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=all_Tml_blk_StoreName%3AAll_Tml_Blk_View_SQL&maxFeatures=10000&outputFormat=application%2Fjson' +
            '&viewparams=tml_cd_bl:' +
            `${tml_cd2}`
        //console.log("strUrl", strUrl.toString());
        return strUrl
        //('http://localhost:8080/geoserver/all_Tml_blk_StoreName/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=all_Tml_blk_StoreName%3AAll_Tml_Blk_View_SQL&maxFeatures=10000&outputFormat=application%2Fjson&viewparams=tml_cd_bl:ICO')
    },
})

const styleFunction = function (feature) {
    return styles[feature.getGeometry().getType()]
}

const PopupLayer = () => {
    const classes = useStyles();
    //const [center, setCenter] = useState([-94.9065, 38.9884]);  // 미국
    //const [center, setCenter] = useState([129.0865, 35.1120]);  // 부산
    //const [center, setCenter] = useState([3.2327,51.3051]);  // 유럽
    //const [center, setCenter] = useState([4.228669, 51.269036]);  // 유럽 ICO
    //conasdfasdfasdfasdfst [center, setCenter] = useState([4.228669, 51.269036]);  // 유럽 ICO

    const [Sts_center, setCenter] = useState(XXXCenter) // 유럽 ICO
    const [Sts_extent, setExtent] = useState(XXXXextent)
    const [Sts_zoom, setZoom] = useState(5)
    // const [minZoom, setMinZoom] = useState(15);
    const [Sts_maxZoom, setMaxZoom] = useState(21)
    const [showLayer0, setShowLayer0] = useState(true)
    const [showLayer1, setShowLayer1] = useState(true)
    const [showLayer2, setShowLayer2] = useState(false)

    return (
        // <Container className={classes.container}>
            <div style={{paddingTop:10}}>
                <Map
                    center={Sts_center}
                    extent={Sts_extent}
                    zoom={Sts_zoom}
                    maxZoom={Sts_maxZoom}
                    // minZoom={minZoom}
                >
                    <Layers>
                        {showLayer0 && <TileLayer source={osm()} zIndex={0} />}
                        {showLayer1 && (
                            <VectorLayer
                                source={tml_Block_GeoJson}
                                style={styles.MultiPolygon}
                            />
                        )}
                        {console.log('tml_Block_GeoJson', tml_Block_GeoJson)}
                        {console.log(tml_Block_GeoJson)}

                        {/* {showLayer2 && (
                <VectorLayer
                source={vector({
                    features: new GeoJSON().readFeatures(geojsonObject2, {
                    featureProjection: get('EPSG:4326'),
                    }),
                })}
                style={styles.MultiPolygon}
                />
            )} */}
                    </Layers>
                    <Controls>
                        <FullScreenControl />
                    </Controls>
                </Map>
                <div>
                    <input
                        type="checkbox"
                        checked={showLayer0}
                        onChange={event => setShowLayer0(event.target.checked)}
                    />{' '}
                    Bottom Map
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={showLayer1}
                        onChange={event => setShowLayer1(event.target.checked)}
                    />{' '}
                    Blocks
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={showLayer2}
                        onChange={event => setShowLayer2(event.target.checked)}
                    />{' '}
                    Wyandotte County
                </div>
            </div>
        // </Container>
    )
}

export default PopupLayer

//function App() {

// return (
//   <div className='App'>

//     <Map view={{ center: [0, 0], zoom: 2 }} >
//       <Layers>
//         <layer.Tile></layer.Tile>
//       </Layers>
//     </Map>
//   </div >
// );
//}

//export default App;



// const useStyles = makeStyles((theme) => ({
//     container:{
//         paddingTop: theme.spacing(10),
//     }
// }));

// const Openlayer1 = () => {
//   const classes = useStyles();

//   return (
//     <Container className={classes.container}>

//         <div>
//             111111
//         </div>    
//     </Container>
//   );
// };

// export default Openlayer1;


// const Map = ({ children, zoom, center }) => {
//     const mapRef = useRef();
//     const [map, setMap] = useState(null);
//     // on component mount
//     useEffect(() => {
//     let options = {
//     view: new ol.View({ zoom, center }),
//     layers: [],
//     controls: [],
//     overlays: []
//     };
//     let mapObject = new ol.Map(options);
//     mapObject.setTarget(mapRef.current);
//     setMap(mapObject);
//     return () => mapObject.setTarget(undefined);
//     }, []);
//     // zoom change handler
//     useEffect(() => {
//     if (!map) return;
//     map.getView().setZoom(zoom);
//     }, [zoom]);
//     // center change handler
//     useEffect(() => {
//     if (!map) return;
//     map.getView().setCenter(center)
//     }, [center])
//     return (
//     <MapContext.Provider value={{ map }}>
//     <div ref={mapRef} className="ol-map">
//     {children}
//     </div>
//     </MapContext.Provider>
//     )
//     }
//     export default Map;