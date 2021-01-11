import React from 'react';
import Container from '../Container/Container';
import {faq} from '../../data/dataStore';
//import Hero from '..Hero/Hero';
import styles from './Faq.scss';

const Faq = () => (
    <Container>
        <Hero titleText={faq.title} image={faq.image} />
        <p>{faq.description}</p>
    </Container>
);

export default Faq;