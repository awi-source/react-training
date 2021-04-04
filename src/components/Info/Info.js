import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imgSrc={settings.info.image} /> 
    <h2>{settings.info.title}</h2>
    <p>{settings.info.content}</p>
  </Container>
);

export default Info;