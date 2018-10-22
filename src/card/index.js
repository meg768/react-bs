import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from '../tag';
import { isObject, isNumber } from 'util';

export default function Card(props) {

    var {tag, className, ...other} = props;

    className = classNames(className, 'card');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );
}

Card.defaultProps = {
    tag: 'div'
};

///////////////////////////////////////////////////////////////////////////////

Card.Header = function(props) {

    var {tag, className, ...other} = props;

    className = classNames(className, 'card-header');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );

}

Card.Header.defaultProps = {
    tag: 'div'
};


///////////////////////////////////////////////////////////////////////////////

Card.Title = function(props) {

    var {tag, className, ...other} = props;

    className = classNames(className, 'card-title');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );

}

Card.Title.defaultProps = {
    tag: 'h4'
};

///////////////////////////////////////////////////////////////////////////////

Card.Text = function(props) {

    var {tag, className, ...other} = props;

    className = classNames(className, 'card-text');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );

}

Card.Title.defaultProps = {
    tag: 'h4'
};

///////////////////////////////////////////////////////////////////////////////

Card.Body = function(props) {

    var {tag, className, ...other} = props;

    className = classNames(className, 'card-body');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );

}

Card.Body.defaultProps = {
    tag: 'div'
};

