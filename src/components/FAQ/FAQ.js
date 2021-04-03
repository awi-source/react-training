import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';


const FAQ = props => (
  <Container>
    <Hero titleText={props.title} imgSrc={props.image} /> 
    <h2>Q: Etiam in velit at ex tempus rutrum?</h2>
    <p>A: uis ultricies tellus quis nulla facilisis, vel laoreet orci condimentum. Maecenas ullamcorper commodo ex in blandit. Sed pulvinar tellus nec nisi placerat, et dignissim tortor feugiat.</p>
    <h2>Q: In non velit id felis vestibulum condimentum?</h2>
    <p>A: Aenean viverra tempor consectetur. Nullam quis auctor ligula. Nulla faucibus imperdiet mauris at facilisis. Sed convallis dictum risus eget faucibus.</p>
    <h2>Q: Cras in massa et mauris pretium hendrerit?</h2>
    <p>A: Nunc luctus rhoncus orci, nec porta magna condimentum et. Nam malesuada luctus nisi. Aenean porta finibus dictum. Cras augue libero, laoreet sit amet accumsan ac, semper sed tortor.</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
};
export default FAQ;