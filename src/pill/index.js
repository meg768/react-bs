import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from '../badge';

export default function Pill(props)  {
    var {className, ...props} = props;
    return Badge({className:classNames(className, 'badge-pill'), ...props});
};

