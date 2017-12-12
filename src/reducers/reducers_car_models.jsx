const IMAGES_DIRECTORY = './src/images/models/';

const defaultState = [
  {
    id: 'a-class-saloon',
    name: 'The A Class',
    model: 'A Class',
    image: `${IMAGES_DIRECTORY}a-class-saloon.jpg`,
    price: '50 000$',
    interior: {
      image: `${IMAGES_DIRECTORY}a-class-saloon.jpg`
    }
  },
  {
    id: 'b-class-tourer',
    name: 'The B Class',
    model: 'B class',
    image: `${IMAGES_DIRECTORY}b-class-tourer.jpg`,
    price: '60 000$'
  },
  {
    id: 'c-class-cabrio',
    name: 'The C Class',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}c-class-cabrio.jpg`,
    price: '65 000$'
  },
  {
    id: 'c-class-coupe',
    name: 'The C Class',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}c-class-coupe.jpg`,
    price: '80 000$'
  },
  {
    id: 'c-class-saloon',
    name: 'The C Class',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}c-class-saloon.jpg`,
    price: '80 000$'
  },
  {
    id: 'c-class-t-model',
    name: 'The C Class T- Model',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}c-class-t-model-estate.jpg`,
    price: '75 000$'
  },
  {
    id: 'e-class-all-terrain',
    name: 'The E Class All Terrain',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}e-class-all-terrain.jpg`,
    price: '80 000$'
  },
  {
    id: 'e-class-coupe',
    name: 'The E Class',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}e-class-coupe.jpg`,
    price: '85 000$'
  },
  {
    id: 'e-class-estate',
    name: 'The E Class',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}e-class-estate.jpg`,
    price: '80 000$'
  },
  {
    id: 'e-class-saloon',
    name: 'The E Class',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}e-class-saloon.jpg`,
    price: '90 000$'
  },
  {
    id: 'g-class-cross-country',
    name: 'The G Class',
    model: 'G class',
    image: `${IMAGES_DIRECTORY}g-class-cross-country-automobile.jpg`,
    price: '85 000$'
  },
  {
    id: 'gla-suv',
    name: 'The GLA Class',
    model: 'GLA class',
    image: `${IMAGES_DIRECTORY}gla-suv.jpg`,
    price: '110 000$'
  },
  {
    id: 'glc-coupe',
    name: 'The GLC Class',
    model: 'GLC class',
    image: `${IMAGES_DIRECTORY}glc-coupe.jpg`,
    price: '100 000$'
  },
  {
    id: 'glc-suv',
    name: 'The GLC Class',
    model: 'GLC class',
    image: `${IMAGES_DIRECTORY}glc-suv.jpg`,
    price: '100 000$'
  },
  {
    id: 'gle-coupe',
    name: 'The GLE Class',
    model: 'GLE class',
    image: `${IMAGES_DIRECTORY}gle-coupe.jpg`,
    price: '110 000$'
  },
  {
    id: 'gle-suv',
    name: 'The GLE Class',
    model: 'GLE class',
    image: `${IMAGES_DIRECTORY}gle-suv.jpg`,
    price: '100 000$'
  },
  {
    id: 'gls-suv',
    name: 'The GLS Class',
    model: 'GLS class',
    image: `${IMAGES_DIRECTORY}gls-suv.jpg`,
    price: '100 000$'
  },
  {
    id: 's-class',
    name: 'The S Class',
    model: 'S class',
    image: `${IMAGES_DIRECTORY}s-class-saloon.jpg`,
    price: '100 000$'
  }
];

export default (state = defaultState) => state;
