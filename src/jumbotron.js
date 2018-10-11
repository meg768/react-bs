import React from 'react';
import Component from './component.js';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from './tag.js';

export default function Jumbotron(props)  {

    var {tag, className, ...other} = props;

    return <Tag tag={tag} className={className} {...other}/>;
};

Jumbotron.defaultProps = {
    className: 'jumbotron',
    tag: 'div'
}