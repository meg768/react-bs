import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';


/**
 * @visibleName Toast.Header
 */
function Header(props) {

    var {children, className, title, subtitle, dismiss, ...props} = props;

    var dismissButton = (
        <button type="button" className="ml-2 mb-1 close" onClick={dismiss} aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    );

    className = classNames(className, 'toast-header');

    return (
        <Tag className={className} {...props}>
            {title ? <strong className="mr-auto">{title}</strong> : undefined}
            {subtitle ? <small className="text-muted">{subtitle}</small> : undefined}
            {children}
            {dismiss ? dismissButton : undefined}
        </Tag>
    );

}

Header.defaultProps = {
    dismiss: false
};

export default Header;
