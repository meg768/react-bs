import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';
import Fade from '../fade';

import Title from './title';
import Header from './header';
import Body from './body';
import Footer from './footer';

var Modal = React.forwardRef((props, ref) => {
    var {className, children, centered, scrollable, style, show, isOpen, ...props} = props;

    if (isOpen != undefined) {
        show = isOpen;
        console.warn('Property Modal.isOpen is obsolete. Use Modal.show instead.');
    }

    className = classNames(className, {'modal': true});

    style = Object.assign({}, {backgroundColor:'rgba(0, 0, 0, 0.5)'}, style);

    return (
        <Fade show={show}>
            <Tag ref={ref} style={style} className={className} {...props}>
                <div className={classNames('modal-dialog', {'modal-dialog-centered': centered}, {'modal-dialog-scrollable': scrollable})}>
                    <div className='modal-content'>
                        {children}            
                    </div>
                </div>
            </Tag>
        </Fade>
    );

});

Modal.propTypes = {
    /** Visibility state */
    show : PropTypes.bool,
    /** Enable vertical scrolling for smaller devices  */
    scrollable : PropTypes.bool,
    /** Center vertically */
    centered : PropTypes.bool,
    /** Role */
    role : PropTypes.string
};

Modal.defaultProps = {
    scrollable : false,
    show : false,
    centered : false,
    role : 'dialog'
}


Modal.Body = Body;
Modal.Header = Header;
Modal.Footer = Footer;
Modal.Title = Title;

export default Modal;