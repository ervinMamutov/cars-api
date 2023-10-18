import { v4 as newId } from 'uuid';

const carsBase = [
  {
    id: newId(),
    model: 'Civic',
    mark: 'Honda',
    year: 2024,
    price: 25000,
    engine: '2.0L',
    img: 'https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-sport-287-1648742553.jpg?crop=0.590xw:0.441xh;0.119xw,0.488xh&resize=1200:*'
  },
  {
    id: newId(),
    model: 'Corolla',
    mark: 'Toyota',
    year: 2022,
    price: 24000,
    engine: '1.8L',
    img: 'https://www.autoscout24.be/cms-content-assets/6D17ZexCTDzSFD4DwO1ORl-17651f1f43545b9b2170ad57c04af522-AS24-toyota_01-1100.jpg'
  },
  {
    id: newId(),
    model: 'Accord',
    mark: 'Honda',
    year: 2022,
    price: 28000,
    engine: '2.4L',
    img: 'https://cdn.motor1.com/images/mgl/0e4v8n/s3/2022-honda-accord-sport-exterior.webp'
  },
  {
    id: newId(),
    model: 'Camry',
    mark: 'Toyota',
    year: 2022,
    price: 26000,
    engine: '2.5L',
    img: 'https://edgecast-img.yahoo.net/mysterio/api/33FFBAAA11F473A3328F7C51462ABF8D7613FF062B34DB0AE6E75B29DE45DEB3/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD10TOC021A021001.jpg'
  },
  {
    id: newId(),
    model: 'Altima',
    mark: 'Nissan',
    year: 2022,
    price: 27000,
    engine: '2.0L',
    img: 'https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2022/03/MyAltima5-e1651160018126.jpg'
  }
];

export default carsBase;
