import { Vector as VectorSource } from 'ol/source';

function xxxvector({ features }) {
    //console.log("from Vector.js" , features);
    return new VectorSource({
        features,
    });
}

export default xxxvector;
