import React from 'react';
import PropTypes from 'prop-types';

import {transformProps} from '../utils';


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
    /** [Background color](https://getbootstrap.com/docs/4.4/utilities/colors/#background-color) */
    bg: PropTypes.any,
    /** [Border](https://getbootstrap.com/docs/4.4/utilities/borders/#border-color) */
    border: PropTypes.any,
    className: PropTypes.string,
    /** [Display](https://getbootstrap.com/docs/4.4/utilities/display) */
    display: PropTypes.any,
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
    /** Rounded border */
    rounded: PropTypes.oneOf([true, false, 'sm', 'lg', 'top', 'right', 'bottom', 'left', 'circle', 'pill', '0']),
    /** [Shadows](https://getbootstrap.com/docs/4.4/utilities/shadows) */
    shadow: PropTypes.any,
    /**  Generates Bootstraps [text](https://getbootstrap.com/docs/4.4/utilities/text) class names. */
    text: PropTypes.any,
    /** [Visibility](https://getbootstrap.com/docs/4.4/utilities/visibility) */
    visible: PropTypes.any    
    
};



export default Tag;
