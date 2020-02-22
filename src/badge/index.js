import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

var Badge = React.forwardRef((props, ref) => {
    var {color, pill, className, ...props} = props;

    className = classNames(className, 'badge');
    className = classNames(className, {[`badge-${color}`]:color});
    className = classNames(className, {[`badge-pill`]:pill});

    return <Tag ref={ref} className={className} {...props}/>;

});

Badge.propTypes = {
    /** Default tag */
    tag: PropTypes.string,
    
    /** Display as pill
     * 
     * 
     */
    pill: PropTypes.bool,

    /**
     * 
     * Badge color.
     * May be one of [primary, secondary, success, danger, warning, info, light]
     * 
     */
    color: PropTypes.string
};

Badge.defaultProps = {
    tag: 'span',
    pill: false
};

export default Badge;



