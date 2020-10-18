import React from 'react';
import App from '../App/App.js';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';


class List extends React.Component {
  render() {
    return (
        <section className={styles.component}>
        <Hero />
    </section>
    )
  }
}

export default List;
