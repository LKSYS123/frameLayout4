import React, { useRef, useState, useEffect } from 'react';
import './Map.css';
import MapContext from './MapContext';
import * as ol from 'ol';
import { transform } from 'ol/proj';
import { toStringXY } from 'ol/coordinate';

// let rotation1 = {
//   rotation: Math.PI / 6,
// }

const MapXX = ({ children, center, extent, zoom, maxZoom }) => {
    const [map, setMap] = useState(null);
    const [selectedCoord, setSelectedCoord] = useState();
    const mapRef = useRef();

    mapRef.current = map;

    const rotatAngle = Math.PI / 1;
    const [rotation1, setRotation] = useState([1]); // 유럽 ICO

    // on component mount=============================================================
    useEffect(() => {
        let options = {
            // view: new ol.View({ zoom, maxZoom, center, rotation1 }),
            view: new ol.View({ center, extent, zoom, maxZoom }),
            layers: [],
            controls: [],
            overlays: [],
            projection: 'EPSG:4326',
        };

        let mapObject = new ol.Map(options);
        mapObject.on('click', handleMapClick);

        // mapObject.center = center;
        // mapObject.extent = extent;
        // mapObject.zoom = zoom;
        // mapObject.maxZoom = maxZoom;

        mapObject.setTarget(mapRef.current);

        setMap(mapObject);
        console.log('mapObject', mapObject);
        //mapObject.setRotation = 12;

        console.log('mapObject.getSize', mapObject.getSize());

        //console.log('mapObject.getRotate', mapObject.rotatAngle);

        return () => mapObject.setTarget(undefined);
    }, []);

    // zoom change handler=============================================================
    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom]);

    // center change handler=============================================================
    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(center);
    }, [center]);

    // map click handler
    const handleMapClick = event => {
        //const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);
        const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);
        // transform coord to EPSG 4326 standard Lat Long
        const transormedCoord = transform(
            clickedCoord,
            'EPSG:3857',
            'EPSG:4326'
        );

        // set React state
        setSelectedCoord(transormedCoord);
        console.log('Clicked');
        //console.log('mapObject', mapObject);
        //console.log('mapRef', mapRef);
        // console.log('map', mapObject);
        debugger;
        //asdfasdfasdfasdfasdf@@@@@@@@@@@@
        // mapObject .getLayers
        //  mapRef.getLayers
        //  map.getLayers
        // mapObject.getLayers().forEach(function (el) {
        //     if (el.get('name') === 'my_layer_name') {
        //         console.log(el);
        //     }
        // });
    };

    // return=============================================================================
    return (
        <MapContext.Provider value={{ map }}>
            <div>
                <div ref={mapRef} className="ol-map" style={{ height: "70vh"}}>
                    {children}
                </div>
                <div className="clicked-coord-label">
                    <p>{selectedCoord ? toStringXY(selectedCoord, 10) : ''}</p>
                </div>
            </div>
        </MapContext.Provider>
    );
};
export default MapXX;
