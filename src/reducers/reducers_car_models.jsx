const IMAGES_DIRECTORY = '/src/images';

const defaultState = [
  {
    id: 'a-class-saloon',
    name: 'The A Class',
    model: 'A Class',
    image: `${IMAGES_DIRECTORY}/models/a-class-saloon.jpg`,
    price: '50 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/a-class-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/a-class-in.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'b-class-tourer',
    name: 'The B Class',
    model: 'B class',
    image: `${IMAGES_DIRECTORY}/models/b-class-tourer.jpg`,
    price: '60 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/b-class-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/b-class-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'c-class-cabrio',
    name: 'The C Class Cabriolet',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-cabrio.jpg`,
    price: '65 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-cabrio-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-cabrio-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one.'
      }
    ]
  },
  {
    id: 'c-class-coupe',
    name: 'The C Class Coupe',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-coupe.jpg`,
    price: '80 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-coupe-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-coupe-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'c-class-saloon',
    name: 'The C Class Saloon',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-saloon.jpg`,
    price: '80 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-limo-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-limo-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with.The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'c-class-t-model',
    name: 'The C Class T- Model',
    model: 'C class',
    image: `${IMAGES_DIRECTORY}/models/c-class-t-model-estate.jpg`,
    price: '75 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-t-model-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/c-class-t-model-in.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      }
    ]
  },
  {
    id: 'e-class-all-terrain',
    name: 'The E Class All Terrain',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-all-terrain.jpg`,
    price: '80 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-all-terrain-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-all-terrain-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'e-class-coupe',
    name: 'The E Class Coupe',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-coupe.jpg`,
    price: '85 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-coupe-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-coupe-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'e-class-t-model',
    name: 'The E Class T- Model',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-estate.jpg`,
    price: '80 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-t-model-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-t-model-in.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      }
    ]
  },
  {
    id: 'e-class-saloon',
    name: 'The E Class Saloon',
    model: 'E class',
    image: `${IMAGES_DIRECTORY}/models/e-class-saloon.jpg`,
    price: '90 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-limo-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/e-class-limo-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'g-class-cross-country',
    name: 'The G Class',
    model: 'G class',
    image: `${IMAGES_DIRECTORY}/models/g-class-cross-country-automobile.jpg`,
    price: '85 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/g-class-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/g-class-in.jpg`,
        text:
          'The interior is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely free-standing. The sporty air vents in a turbine-look are another highlight. The front seats have comfort features available from higher segments, including seat climate control, massage function and multicontour seat. The newly designed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  },
  {
    id: 'gla-suv',
    name: 'The GLA Class',
    model: 'GLA class',
    image: `${IMAGES_DIRECTORY}/models/gla-suv.jpg`,
    price: '110 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/gla-class-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/gla-class-in.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      }
    ]
  },
  {
    id: 'glc-coupe',
    name: 'The GLC Class Coupe',
    model: 'GLC class',
    image: `${IMAGES_DIRECTORY}/models/glc-coupe.jpg`,
    price: '100 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/glc-class-coupe-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/glc-class-coupe-in.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been.'
      }
    ]
  },
  {
    id: 'glc-suv',
    name: 'The GLC Class SUV',
    model: 'GLC class',
    image: `${IMAGES_DIRECTORY}/models/glc-suv.jpg`,
    price: '100 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/glc-class-suv-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/glc-class-suv-in.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been.'
      }
    ]
  },
  {
    id: 'gle-coupe',
    name: 'The GLE Class Coupe',
    model: 'GLE class',
    image: `${IMAGES_DIRECTORY}/models/gle-coupe.jpg`,
    price: '110 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/gle-class-coupe-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/gle-class-coupe-in.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one front door to the other with no visual discontinuity. The standard widescreen cockpit is completely.'
      }
    ]
  },
  {
    id: 'gle-suv',
    name: 'The GLE Class SUV',
    model: 'GLE class',
    image: `${IMAGES_DIRECTORY}/models/gle-suv.jpg`,
    price: '100 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/gle-class-suv-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/gle-class-suv-in.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one.'
      }
    ]
  },
  {
    id: 'gls-suv',
    name: 'The GLS Class',
    model: 'GLS class',
    image: `${IMAGES_DIRECTORY}/models/gls-suv.jpg`,
    price: '100 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/gls-class-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/gls-class-in.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been completely dispensed with. As a result, the wing-shaped main body of the dashboard extends from one.'
      }
    ]
  },
  {
    id: 's-class',
    name: 'The S Class',
    model: 'S class',
    image: `${IMAGES_DIRECTORY}/models/s-class-saloon.jpg`,
    price: '100 000',
    quote: 'The Best or nothing...',
    carDescription: [
      {
        description: 'exterior',
        image: `${IMAGES_DIRECTORY}/car-view/s-class-ex.jpg`,
        text:
          'It’s a good looking design, with a lot going on: rising swage lines, bonnet creases, LED clusters… you certainly couldn’t call it anonymous. It’s especially head-turning with optional big wheels, black glossy bits, pointy ‘Sport’ grille and huge sunroof. It’s just been facelifted, note, but it’s all pretty subtle stuff.'
      },
      {
        description: 'interior',
        image: `${IMAGES_DIRECTORY}/car-view/s-class-in.jpg`,
        text:
          'The interior of the A-Class is a completely new departure, and revolutionises the compact class from the inside with a new feeling of spaciousness. The unique architecture is particularly marked by the avantgarde design of the dashboard. For the first time a cowl above the cockpit has been signed 3-spoke steering wheel, door handles, centre console and seats follow a modern design idiom.'
      }
    ]
  }
];

export default (state = defaultState) => state;
