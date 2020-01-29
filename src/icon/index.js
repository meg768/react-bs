import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tag from '../tag';
import {isString, transformProps} from '../utils';


export default function Icon(props) {

    var {tag, icon, style, width, height, children, ...props} = props;

    if (icon == undefined) {
        tag = 'div';
        props = {};
        children = 'No icon specified';
    }

    else if (isString(icon)) {
        tag = 'img';
        props = {src:icon, style:{width:width, height:height, ...style}, ...props};
    }

    else {
        tag = icon;
        props = {width:width, height:height, style:style, ...props};
    }

    return (
        <Tag tag={tag} {...props}>
            {children}
        </Tag>
    );
};


/*

export default function Icon(props) {

    var {tag, icon, style, width, height, children, ...props} = props;

    if (icon == undefined) {
        tag = 'div';
        children = 'No icon specified';    
    }
    else if (isString(icon)) {
        tag = 'img';
        props = {src:icon, style:{width:width, height:height, ...style}, ...props};
    }
    else {
        tag = icon;
    }

    return (
        <Tag tag={tag} width={width} height={height} {...props}>
            {children}
        </Tag>
    );
};
*/


Icon.defaultProps = {
};

Icon.propTypes = {
    icon : PropTypes.any
};
