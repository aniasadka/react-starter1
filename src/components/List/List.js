import React from 'react';
import App from '../App/App.js';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';


class List extends React.Component {
  render() {
    return (
    <section className={styles.component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
            {this.props.children}
        </div>
    </section>
    )
  }
}

export default List;
