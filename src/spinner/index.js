import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { isObject, isNumber, isString, isBoolean } from 'util';

import Tag from '../tag';


export default function Spinner(props)  {
    var {type, style, className, size, color, children, ...props} = props;

    if (type == undefined)
        type = 'border';

    if (isNumber(size)) {
        style = {...style, width:`${size}rem`, height:`${size}rem`};
    }

    if (isString(size)) {
        if (size == 'xs')
            style = {...style, width:'0.5rem', height:'0.5rem'}
        else if (size == 'sm')
            style = {...style, width:'1rem', height:'1rem'}
        else if (size == 'md')
            style = {...style, width:'2rem', height:'2rem'}
        else if (size == 'lg')
            style = {...style, width:'3rem', height:'3rem'}
        else if (size == 'xl')
            style = {...style, width:'4rem', height:'4rem'}
        else
            style = {...style, width:size, height:size}

    }

    className = classNames(className, type ? `spinner-${type}` : false);
    className = classNames(className, color ? `text-${color}` : false);

    return (
        <Tag tag='div' role='status' className={className} style={style} {...props}>
            <span className='sr-only'>
                {children}
            </span>
        </Tag>
    );
};



Spinner.propTypes = {
    type     : PropTypes.string,
    tag      : PropTypes.string,
    color    : PropTypes.string,
    children : PropTypes.string,
    size     : PropTypes.string,
    children : PropTypes.oneOfType([PropTypes.object, PropTypes.string])    
}

Spinner.defaultProps = {
    type     : 'border',
    tag      : 'div',
    children : 'Loading...'
}

