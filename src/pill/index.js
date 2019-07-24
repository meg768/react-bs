import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Badge from '../badge';

export default function Pill(props)  {
    return <Badge className={classNames(props.className, 'badge-pill')} {...props}/>;
};

