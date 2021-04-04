import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero imgSrc={settings.FAQ.image} /> 
    <h2>{settings.FAQ.question}</h2>
    <p>{settings.FAQ.answer}</p> 
  </Container>
);
export default FAQ;