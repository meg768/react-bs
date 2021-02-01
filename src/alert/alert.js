import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {isFunction} from '../utils';
import Tag from '../tag';

import Body from './body';
import Separator from './separator';
import Header from './header';

/**
 * 
 * Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 * 
 */

const Alert = React.forwardRef((props, ref) => {

    var {dismissable, show, dismiss, tag, color, role, children, className, ...props} = props;

    if (!show)
        return null;

    className = classNames(className, {'alert': true});
    className = classNames(className, dismissable ? `alert-dismissible`: undefined);
    className = classNames(className, color ? `alert-${color}` : undefined);
    
    var dismissButton = null;
        
    if (dismiss) {
        if (!isFunction(dismiss))
            dismiss = () => {};

        dismissButton = (
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={dismiss}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }

    return (
        <Tag ref={ref} tag={tag} className={className} role={role} {...props}>
            {dismissButton}
            {children}
        </Tag>

    );

});

Alert.propTypes = {
    /** [Color of alert](https://getbootstrap.com/docs/4.4/components/alerts/#examples) */
    color : PropTypes.any,
    /** [Dismissable appearance](https://getbootstrap.com/docs/4.4/components/alerts/#dismissing) */
    dismiss : PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    /** Visible state */
    show : PropTypes.bool,
    /** Role */
    role : PropTypes.any,
    /** Default tag */
    tag : PropTypes.string
};

Alert.defaultProps = {
    color : 'info',
    role : 'alert',
    tag : 'div',
    show: true,
    dismissable : false
};


Alert.Header = Header;
Alert.Separator = Separator;
Alert.Body = Body;

export default Alert;