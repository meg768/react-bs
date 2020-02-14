import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {isObject, isNumber, isString, isBoolean, isArray, transformProps} from '../utils';

export default class Tag extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var {tag : TheTag, children, ...props} = transformProps(this.props);

        return (
            <TheTag {...props}>
                {children}
            </TheTag>
        );            
    }

}

Tag.defaultProps = {
    tag: 'div',

    align: undefined,
    alignContent: undefined,
    alignItems: undefined,
    bg: undefined,
    border: undefined,
    className: undefined,
    d: undefined,
    display: undefined,
    fixed: undefined,
    flex: undefined,
    float: undefined, 
    fontWeight: undefined,
    invisible: undefined,
    justifyContent: undefined,
    m: undefined,
    margin: undefined,
    mb: undefined,
    ml: undefined,
    mr: undefined,
    mt: undefined,
    mx: undefined,
    my: undefined,
    p: undefined,
    padding: undefined,
    pb: undefined,
    pl: undefined,
    position: undefined,
    pr: undefined,
    pt: undefined,
    px: undefined,
    py: undefined,
    rounded: undefined,
    shadow: undefined,
    text: undefined,
    visible: undefined    

};

Tag.propTypes = {

    tag: PropTypes.any,

    /** Vertical alignment*/
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline', 'text-top', 'text-bottom']),
    /** Aligning content */
    alignContent: PropTypes.oneOf(['start', 'end', 'center', 'around', 'stretch']),
    alignItems: PropTypes.any,
    bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
    /** https://getbootstrap.com/docs/4.4/utilities/borders */
    border: PropTypes.any,
    className: PropTypes.any,
    d: PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    display: PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    fixed: PropTypes.any,
    /** Flex display, use display="flex" */
    flex: PropTypes.oneOf([PropTypes.object, 'nowrap', 'wrap', 'wrap-reverse', 'sm-nowrap', 'sm-wrap', 'sm-wrap-reverse', 'md-nowrap', 'md-wrap', 'md-wrap-reverse', 'lg-nowrap', 'lg-wrap', 'lg-wrap-reverse', 'xl-nowrap', 'xl-wrap', 'xl-wrap-reverse']),
    float: PropTypes.any, 
    fontWeight: PropTypes.any,
    invisible: PropTypes.any,
    justifyContent: PropTypes.any,
    m: PropTypes.any,
    margin: PropTypes.any,
    mb: PropTypes.any,
    ml: PropTypes.any,
    mr: PropTypes.any,
    mt: PropTypes.any,
    mx: PropTypes.any,
    my: PropTypes.any,
    p: PropTypes.any,
    padding: PropTypes.any,
    pb: PropTypes.any,
    pl: PropTypes.any,
    position: PropTypes.any,
    pr: PropTypes.any,
    pt: PropTypes.any,
    px: PropTypes.any,
    py: PropTypes.any,
    rounded: PropTypes.any,
    shadow: PropTypes.any,
    text: PropTypes.any,
    visible: PropTypes.any    
    
};

