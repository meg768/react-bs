import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isObject, isNumber, isString} from '../utils';
import Tag from '../tag';

/**
 * The __Col__ component is used for creating columns in a __Row__.
 * 
 * See [Bootstrap documentation](https://getbootstrap.com/docs/4.4/layout/overview) for more information on layout.
 * 
 */

var Col = React.forwardRef((props, ref) => {

    var {className, ref, col, width, span, offset, ...props} = props;

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

    if (!col && span)
        col = span;

    if (!col && width)
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
        <Tag ref={ref} className={className} {...props}/>
    );
});



Col.defaultProps = {
};

Col.propTypes = {
    /**
     * Specifies column offset. May be an integer or an object specifying offsets for different displays.
     * 
     * Specify offset for all devices with the following.
     * 
     * ``` 
     * <Col offset={6}>
     * ...
     * </Col>
     * ```
     * 
     * Specify offset for specific devices.
     * 
     * ``` 
     * <Col offset={{xs:12, sm:8, md:6, lg:5, xl:3}}>
     * ...
     * </Col>
     * ```
     * 
     */
    offset: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

    /**
     * 
     * Specifies column span (or width) of a column. May be an integer or an object specifying offsets for different displays.
     * 
     * Specify span for all devices with the following.
     * 
     * ``` 
     * <Col span={6}>
     * ...
     * </Col>
     * ```
     * 
     * Specify span for specific devices.
     * 
     * ``` 
     * <Col span={{xs:12, sm:8, md:6, lg:5, xl:3}}>
     * ...
     * </Col>
     * ```
     * 
     */
    span: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};


export default Col;