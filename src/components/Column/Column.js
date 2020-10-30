import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <Icon name={this.props.icon}/>
          {this.props.title}
        </h3>
      </section>
    );
  }
}
Column.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.string,
};

export default Column; 