const options = [
  {
    img: '/src/images/home/offroad-event.jpg',
    title: 'Basic offroad training, Austria',
    text:
      'Black ice, emergency stops or sudden evasive manoeuvres on slick roads – we will prepare you for the chilly season in a fantastic Alpine setting. What do you do when your car starts to skid? What’s the right way to brake on icy roads? Learn to keep a cool head and to control your vehicle confidently even in surprising situations on the 120,000-square-meter ice arena in the Austrian driving training centre in Saalfelden.'
  },
  {
    img: '/src/images/home/museum-event.jpg',
    title: 'Mercedes-Benz Social Media Night',
    text:
      'Come, listen, tweet. The Social Media Club Stuttgart is held once a month at the Mercedes-Benz Museum. Senior executives and opinion leaders to the world of social media can engage in discussion with experts about digital trends at the world’s largest Twitter Wall.'
  },
  {
    img: '/src/images/home/winterhuette-event.jpg',
    title: 'Cannstatt Chalet: Catering with alpine cosiness',
    text:
      'The museum hill at the Mercedes-Benz Museum might not be an Alpine peak, but the rustic charm of winter chalet makes it into a popular location full of alpine cosiness. From 26 Ocober until 23 December 2017 the “Cannstatter Hütte” / “Cannstatt Chalet” is back again this winter.'
  }
];

const EventsReducer = (state = options) => state;

export default EventsReducer;
