const IMAGE_URL = './src/images/about/';

const defaultState = [
  {
    id: 1,
    date: '1886-1893',
    text:
      'Mercedes-Benz (German pronunciation: [mɛʁˈtseːdəsˌbɛnts]) is a global automobile manufacturer and a division of the German company Daimler AG. The brand is known for luxury vehicles, buses, coaches, and lorries. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. \n' +
      "Mercedes-Benz traces its origins to Daimler-Motoren-Gesellschaft's 1901 Mercedes and Karl Benz's 1886 Benz Patent-Motorwagen, which is widely regarded as the first gasoline-powered automobile. The slogan for the brand is the best or nothing \n" +
      "The Benz Patent-Motorwagen ('patent motorcar'), built in 1885, is widely regarded as the world's first automobile,[1] that is, a vehicle designed to be propelled by an internal combustion engine.",
    imageSrc: `${IMAGE_URL}1886.jpg`
  },
  {
    id: 2,
    date: '1901-1933',
    text:
      'The Mercedes automobile was first marketed in 1901 by Daimler-Motoren-Gesellschaft (Daimler Motors Corporation).\n' +
      "Emil Jellinek, an Austrian automobile entrepreneur who worked with DMG created the trademark in 1902, naming the 1901 Mercedes 35 hp after his daughter Mercedes Jellinek. The first Mercedes-Benz brand name vehicles were produced in 1926, following the merger of Karl Benz's and Gottlieb Daimler's companies into the Daimler-Benz company. On 28 June 1926, Mercedes-Benz was formed with the merger of Karl Benz and Gottlieb Daimler's two companies.",
    imageSrc: `${IMAGE_URL}1928.jpg`
  },
  {
    id: 3,
    date: '1939-1950',
    text:
      'The Mercedes-Benz 320A is a cabriolet built by German automobile manufacturer Mercedes-Benz between 1938 and 1942. The new model was lower, longer and broader than its predecessor Mercedes-Benz 290 of type W18, the production of which started on 1933. The new model was displayed for the first time at the Berlin Auto Show on 1937. The designing process of the new Mercedes-Benz 320A was led by the former race driver Max Zailer and its obviously sporty appearance was partly due to the influence of the luxurious Mercedes-Benz 540K, the model called "Silver Arrow".',
    imageSrc: `${IMAGE_URL}1939.jpg`
  },
  {
    id: 4,
    date: '1959-1968',
    text:
      "The Mercedes-Benz W111 was a chassis code given to a range of Mercedes' vehicles produced between 1959 and 1971, including four-door sedans (1959-1968) and two-door coupés and cabriolets (1961 to 1971)\n." +
      'Introduced as inline 6-cylinder cars with 2.2-litre engines, the W111 spawned two lines of variants: entry-level vehicles sharing its chassis and bodies but with four-cylinder engines were designated the W110. A luxury version built on the W111 chassis with its body and the fuel-injected 3-litre M186 six-cylinder engine was designated the W112.',
    imageSrc: `${IMAGE_URL}1959.jpg`
  },
  {
    id: 5,
    date: '1969-1976',
    text:
      'The Mercedes-Benz C111 was a series of experimental automobiles produced by Mercedes-Benz in the 1960s and 1970s. The company was experimenting with new engine technologies, including Wankel engines, diesel engines, and turbochargers, and used the basic C111 platform as a testbed. Other experimental features included multi-link rear suspension, gull-wing doors and a luxurious interior with leather trim and air conditioning.',
    imageSrc: `${IMAGE_URL}1969.jpg`
  },
  {
    id: 6,
    date: '1972-1980',
    text:
      'The Mercedes-Benz W116 is a series of flagship luxury sedans produced from September 1972[2] until 1980.[3] The W116 automobiles were the first Mercedes-Benz models to be officially called S-Class, although earlier sedan models had already unofficially been designated with the letter "S" – for Sonderklasse or "special class."',
    imageSrc: `${IMAGE_URL}1972.jpg`
  },
  {
    id: 7,
    date: '1993-2000',
    text:
      "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque's line-up until the A-Class arrived in 1997. The C-Class is built at Mercedes-Benz factories in Sindelfingen and Bremen, Germany as well as numerous satellite factories in other countries. The first C-Class (W202) sedan was produced on 1 June 1993, and the first of the second generation (W203) rolled off the assembly line on 18 July 2000. ",
    imageSrc: `${IMAGE_URL}1993.jpg`
  },
  {
    id: 8,
    date: '2015-',
    text:
      'The Mercedes-AMG GT (C190 / R190) is a 2-door, 2-seater fastback coupé and roadster produced by Mercedes-AMG. The sports car was presented on 9 September 2014 and was officially unveiled to the public in October 2014 at the Paris Motor Show.[4] After the SLS AMG, it is the second sports car developed entirely in-house by Mercedes-AMG. The car is produced in two performance variations, with the GT S (C120) having a slightly higher performance. Both models went on sale in March 2015, with a GT3 racing variant of the car expected to be released in 2016. All variants are assembled at the Mercedes-Benz plant in Sindelfingen, Germany.',
    imageSrc: `${IMAGE_URL}2015+.jpg`
  }
];

export default (state = defaultState) => state;
