import React from 'react';
import PropTypes from 'prop-types';

import {transformProps} from '../utils';

/** 
 * 
 * The **Tag** is a central part of this library and acts like a base class for transforming properties into a valid
 * series of Bootstrap class names.
 *
 * This includes
 *
 * * Borders
 * * Colors
 * * Display
 * * Flex
 * * Float
 * * Shadows
 * * Spacing
 * * Text alignment
 * * Vertical alignment
 * * Visibility
 * 
 * 
 */

const Tag = React.forwardRef((props, ref) => {
    var {tag : Component, ...props} = transformProps(props);

    return (
        <Component ref={ref} {...props}/>
    );            

});

Tag.defaultProps = {
    tag: 'div' 
};

Tag.propTypes = {
    /** 
     * 
     * Default tag
     * 
     * */ 

    tag: PropTypes.any,

    /** [Vertical alignment](https://getbootstrap.com/docs/4.4/utilities/vertical-align) */
    align: PropTypes.any,
    /** [Aligning content](https://getbootstrap.com/docs/4.4/utilities/flex/#align-content) */
    alignContent: PropTypes.any,
    /** [Align items](https://getbootstrap.com/docs/4.4/utilities/flex/#align-items) */
    alignItems: PropTypes.any,
    /**
     * [Background color](https://getbootstrap.com/docs/4.4/utilities/colors/#background-color) 
     * One of primary, secondary, success, danger, warning, info, light, dark.
     * */
    bg: PropTypes.string,
    /**
     * 
     * 
     * [Border](https://getbootstrap.com/docs/4.4/utilities/borders/#border-color). 
     * One of primary, secondary, success, danger, warning, info, light, dark.
     * 
     * */
    border: PropTypes.string,
    className: PropTypes.string,
    /** [Display](https://getbootstrap.com/docs/4.4/utilities/display) */
    display: PropTypes.string,
    fixed: PropTypes.any,
    /** Flex display, use display="flex" */
    flex: PropTypes.oneOf([PropTypes.object, 'nowrap', 'wrap', 'wrap-reverse', 'sm-nowrap', 'sm-wrap', 'sm-wrap-reverse', 'md-nowrap', 'md-wrap', 'md-wrap-reverse', 'lg-nowrap', 'lg-wrap', 'lg-wrap-reverse', 'xl-nowrap', 'xl-wrap', 'xl-wrap-reverse']),
    float: PropTypes.string, 
    /** Specifies [font-weight](https://getbootstrap.com/docs/4.4/utilities/text/#font-weight-and-italics) */
    fontWeight: PropTypes.any,
    /** [Visibility](https://getbootstrap.com/docs/4.4/utilities/visibility) */
    invisible: PropTypes.any,
    /** Justifies content horizontally. See [justify-content](https://getbootstrap.com/docs/4.4/utilities/flex/#justify-content). */
    justifyContent: PropTypes.any,
    margin: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
    padding: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
    position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
    /** Rounded border - sm, lg, top, right, bottom, left, circle, pill, 0 */
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    /** [Shadows](https://getbootstrap.com/docs/4.4/utilities/shadows) */
    shadow: PropTypes.any,
    /**  Generates Bootstraps [text](https://getbootstrap.com/docs/4.4/utilities/text) class names. */
    text: PropTypes.any,
    /** [Visibility](https://getbootstrap.com/docs/4.4/utilities/visibility) */
    visible: PropTypes.any    ,

    /** Raw Bootstrap class names to be appended */
    raw: PropTypes.string
    
};



export default Tag;
