import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { isObject, isNumber, isString, isBoolean } from 'util';
import Tag from '../tag';
import Fade from '../fade';


export default function Toast(props) {

    var {show, className, ...props} = props;

    return (
        <Fade show={show}>
            <Tag role="alert" aria-live="assertive" aria-atomic="true"  className={classNames(className, 'toast')} {...props}/>
        </Fade>
    );
};

Toast.defaultProps = {
    show : 'false'
};

Toast.Header = function(props) {

    var {children, title, subtitle, dismiss, ...props} = props;

    var dismissButton = (
        <button type="button" className="ml-2 mb-1 close" onClick={dismiss} aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    );

    return (
        <Tag className='toast-header' {...props}>
            {title ? <strong className="mr-auto">{title}</strong> : undefined}
            {subtitle ? <small className="text-muted">{subtitle}</small> : undefined}
            {children}
            {dismiss ? dismissButton : undefined}
        </Tag>
    );

}

Toast.Title = function(props) {
    return <Tag  {...props}/>
}

Toast.Title.defaultProps = {
    fontWeight : 'bold',
    margin : {right:'auto'}
};

Toast.Subtitle = function(props) {
    return <Tag  {...props}/>
}

Toast.Subtitle.defaultProps = {
    tag   : 'small',
    text  : 'muted'
};


Toast.Body = function(props) {

    var {className, ...props} = props;

    return <Tag className={classNames(className, 'toast-body')} {...props}/>
};

