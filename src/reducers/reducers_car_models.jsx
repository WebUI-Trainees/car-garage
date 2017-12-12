const IMAGES_DIRECTORY = '/src/images';

const defaultState = [
  {
    id: 'a-class-saloon',
    name: 'The A Class',
    model: 'A Class',
    image: `${IMAGES_DIRECTORY}/models/a-class-saloon.jpg`,
    price: '50 000$',
    quote: 'some quote here',
    carDescription: [
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/single-model/a-class/a-class-interior.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      },
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/single-model/a-class/a-class-exterior.jpg`,
        text: 'Striking, youthful, dynamic.Fits no stereotype. But perfectly fits into your life.'
      }
    ]
  },
  {
    id: 'b-class-tourer',
    name: 'The B Class',
    model: 'B class',
    image: `${IMAGES_DIRECTORY}/models/b-class-tourer.jpg`,
    price: '60 000$'
  },
  {
    id: 'c-class-cabrio',
    name: 'The C Class',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-cabrio.jpg`,
    price: '65 000$'
  },
  {
    id: 'c-class-coupe',
    name: 'The C Class',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-coupe.jpg`,
    price: '80 000$'
  },
  {
    id: 'c-class-saloon',
    name: 'The C Class',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-saloon.jpg`,
    price: '80 000$'
  },
  {
    id: 'c-class-t-model',
    name: 'The C Class T- Model',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-t-model-estate.jpg`,
    price: '75 000$'
  },
  {
    id: 'e-class-all-terrain',
    name: 'The E Class All Terrain',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-all-terrain.jpg`,
    price: '80 000$'
  },
  {
    id: 'e-class-coupe',
    name: 'The E Class',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-coupe.jpg`,
    price: '85 000$'
  },
  {
    id: 'e-class-estate',
    name: 'The E Class',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-estate.jpg`,
    price: '80 000$'
  },
  {
    id: 'e-class-saloon',
    name: 'The E Class',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-saloon.jpg`,
    price: '90 000$'
  },
  {
    id: 'g-class-cross-country',
    name: 'The G Class',
    model: 'G class',
    image: `${IMAGES_DIRECTORY}/models/g-class-cross-country-automobile.jpg`,
    price: '85 000$'
  },
  {
    id: 'gla-suv',
    name: 'The GLA Class',
    model: 'GLA class',
    image: `${IMAGES_DIRECTORY}/models/gla-suv.jpg`,
    price: '110 000$'
  },
  {
    id: 'glc-coupe',
    name: 'The GLC Class',
    model: 'GLC class',
    image: `${IMAGES_DIRECTORY}/models/glc-coupe.jpg`,
    price: '100 000$'
  },
  {
    id: 'glc-suv',
    name: 'The GLC Class',
    model: 'GLC class',
    image: `${IMAGES_DIRECTORY}/models/glc-suv.jpg`,
    price: '100 000$'
  },
  {
    id: 'gle-coupe',
    name: 'The GLE Class',
    model: 'GLE class',
    image: `${IMAGES_DIRECTORY}/models/gle-coupe.jpg`,
    price: '110 000$'
  },
  {
    id: 'gle-suv',
    name: 'The GLE Class',
    model: 'GLE class',
    image: `${IMAGES_DIRECTORY}/models/gle-suv.jpg`,
    price: '100 000$'
  },
  {
    id: 'gls-suv',
    name: 'The GLS Class',
    model: 'GLS class',
    image: `${IMAGES_DIRECTORY}/models/gls-suv.jpg`,
    price: '100 000$'
  },
  {
    id: 's-class',
    name: 'The S Class',
    model: 'S class',
    image: `${IMAGES_DIRECTORY}/models/s-class-saloon.jpg`,
    price: '100 000$'
  }
];

export default (state = defaultState) => state;
