import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * @visibleName Modal.Header
 */

var Header = React.forwardRef((props, ref) => {

    var {tag, dismiss, className, ...props} = props;

    var dismissButton = null;

    if (dismiss) {
        dismissButton = (
            <button type='button' className='close' aria-label='Close' onClick={dismiss}>
                <span aria-hidden="true">×</span>
            </button>
        );
    }

    return (
        <Tag ref={ref} tag={tag} className={classNames(className, 'modal-header')} {...props}>
            {props.children}
            {dismissButton}
        </Tag>
    );

});

Header.propTypes = {
    /** Default tag */
    tag: PropTypes.string,
    /** Function called when dismissing the dialog */
    dismiss: PropTypes.func
};

Header.defaultProps = {
    tag: 'div'
};

export default Header;
