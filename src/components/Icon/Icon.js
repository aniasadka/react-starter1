import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.PropTypes = {
    name: PropTypes.number,
};

export default Icon;
