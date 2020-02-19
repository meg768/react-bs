import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isObject, isNumber, isString} from '../utils';
import Tag from '../tag';

export default function Col(props) {

    var {className, col, width, offset, ...props} = props;

    // Backward compatability
    var {xs, sm, md, lg, xl, ...props} = props;

    function fix(name, prop) {
        if (isObject(prop)) {
            console.warn(`Property ${name} is invalid in <Col/>. Use width and/or offset instead.`);
            className = classNames(className, prop.offset ? `offset-${name}-${prop.offset}` : undefined);
            className = classNames(className, prop.width  ? `col-${name}-${prop.width}`     : undefined);
        }
        else if (prop != undefined) {
            console.warn(`Property ${name} is invalid in <Col/>. Use width and/or offset instead.`);
            className = classNames(className, `col-${name}-${prop}`);
        }
    }

    fix('xs', xs);
    fix('sm', sm);
    fix('md', md);
    fix('lg', lg);
    fix('xl', xl);
    
    if (width && !col)
        col = width;

    className = classNames(className, 'col');

    if (isObject(col)) {
        className = classNames(className, col.xs ? `col-${col.xs}` : undefined);
        className = classNames(className, col.sm ? `col-sm-${col.sm}` : undefined);
        className = classNames(className, col.md ? `col-md-${col.md}` : undefined);
        className = classNames(className, col.lg ? `col-lg-${col.lg}` : undefined);
        className = classNames(className, col.xl ? `col-xl-${col.xl}` : undefined);
    }
    else {
        className = classNames(className, col ? `col-${col}` : undefined);
    }

    if (isObject(offset)) {
        className = classNames(className, offset.xs ? `offset-${offset.xs}` : undefined);
        className = classNames(className, offset.sm ? `offset-sm-${offset.sm}` : undefined);
        className = classNames(className, offset.md ? `offset-md-${offset.md}` : undefined);
        className = classNames(className, offset.lg ? `offset-lg-${offset.lg}` : undefined);
        className = classNames(className, offset.xl ? `offset-xl-${offset.xl}` : undefined);
    }
    else {
        className = classNames(className, offset ? `offset-${offset}` : undefined);
    }

    return (
        <Tag className={className} {...props}/>
    );
}

Col.defaultProps = {
};

Col.propTypes = {

    /**
     * Same as **width**. See below.
     */
    col: PropTypes.any,

    /**
     * Specifies column offset. May be an integer or an object specifying **{xs:12, sm:8, md:6, lg:5, xl:3}**
     */
    offset: PropTypes.any,

    /**
     * Specifies width of column. May be an integer or an object specifying **{xs:12, sm:8, md:6, lg:5, xl:3}**
     */
    width  : PropTypes.any
};






