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
    display: undefined,
    fixed: undefined,
    flex: undefined,
    float: undefined, 
    fontWeight: undefined,
    invisible: undefined,
    justifyContent: undefined,
    margin: undefined,
    padding: undefined,
    position: undefined,
    rounded: undefined,
    shadow: undefined,
    text: undefined,
    visible: undefined    

};

Tag.propTypes = {
    /** Default tag */
    tag: PropTypes.any,

    /** Vertical alignment*/
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline', 'text-top', 'text-bottom']),
    /** Aligning content */
    alignContent: PropTypes.oneOf(['start', 'end', 'center', 'around', 'stretch']),
    alignItems: PropTypes.any,
    /** Background color */
    bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted']),
    border: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted']),
    className: PropTypes.string,
    display: PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    fixed: PropTypes.any,
    /** Flex display, use display="flex" */
    flex: PropTypes.oneOf([PropTypes.object, 'nowrap', 'wrap', 'wrap-reverse', 'sm-nowrap', 'sm-wrap', 'sm-wrap-reverse', 'md-nowrap', 'md-wrap', 'md-wrap-reverse', 'lg-nowrap', 'lg-wrap', 'lg-wrap-reverse', 'xl-nowrap', 'xl-wrap', 'xl-wrap-reverse']),
    float: PropTypes.string, 
    fontWeight: PropTypes.any,
    invisible: PropTypes.any,
    justifyContent: PropTypes.any,
    margin: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
    padding: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
    position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
    /** Rounded border */
    rounded: PropTypes.oneOf([true, false, 'sm', 'lg', 'top', 'right', 'bottom', 'left', 'circle', 'pill', '0']),
    shadow: PropTypes.oneOf([true, false, 'none', 'sm', 'lg']),
    text: PropTypes.any,
    visible: PropTypes.any    
    
};

