import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';
import Fade from '../fade';

import Body from './body';
import Header from './header';
import Title from './title';
import Subtitle from './subtitle';

function Toast(props) {

    var {show, role, ariaLive, ariaAtomic, className, ...props} = props;

    return (
        <Fade show={show}>
            <Tag role={role} aria-live={ariaLive} aria-atomic={ariaAtomic} className={classNames(className, 'toast')} {...props}/>
        </Fade>
    );
};

Toast.defaultProps = {
    show : 'false',
    role: 'alert',
    ariaLive: 'assertive',
    ariaAtomic: true
    

};

Toast.Body = Body;
Toast.Title = Title;
Toast.Subtitle = Subtitle;
Toast.Header = Header;


export default Toast;