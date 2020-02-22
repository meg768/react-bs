import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * 
 *  
 * Dialog footer. This is typically the place OK or Cancel buttons.
 * 
 * 
 * @visibleName Modal.Footer
 */

var Footer = React.forwardRef((props, ref) => {
    var {tag, className, ...props} = props;

    return (
        <Tag ref={ref} tag={tag} className={classNames(className, 'modal-footer')} {...props}/>
    );
});

Footer.defaultProps = {
    tag: 'div'
};

export default Footer;
