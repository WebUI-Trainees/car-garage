import React from 'react';
import DateList from './aboutComponents/DateList';
import Image from './aboutComponents/Image';
import SingleDate from './aboutComponents/SingleDate';
import Slider from './aboutComponents/Slider';
import TextContainer from './aboutComponents/TextContainer';

const AboutPage = () => (
  <div>
    <Slider />
    <DateList>
      <SingleDate />
    </DateList>
    <Image />
    <TextContainer />
  </div>
);

export default AboutPage;
