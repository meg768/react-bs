import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import PopperJs from 'popper.js';

function debug() {
    console.log.apply(null, arguments);
}




export default class Modal extends React.Component {

    constructor(args) {
        super(args);

        this.state = {};
    }

    static propTypes = {
        isOpen: PropTypes.bool,
        centered : PropTypes.bool,
        role : PropTypes.string
    };

    static defaultProps = {
        isOpen : false,
        centered : false,
        role: 'dialog'
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    componentWillUnmount() {
    }


    render() {
        var {className, centered, style, isOpen, ...props } = this.props;

        className = classNames(className, {'modal': true});

        style = Object.assign({}, {backgroundColor:'rgba(0, 0, 0, 0.5)'}, style);

        return (
            <Fade show={isOpen}>
                <div style={style} className={className} {...props}>
                    <div className={classNames('modal-dialog', {'modal-dialog-centered': centered})}>
                        <div className='modal-content'>
                           {this.props.children}            
                        </div>
                    </div>
                </div>

            </Fade>
        );

  }
}


/**
 * 
 *  MODAL BDY 
 * 
 * 
*/
Modal.Body = function(props) {

    var {className, ...other} = props;

    return (
        <div className={classNames(className, 'modal-body')} {...other}>
            {props.children}
        </div>
    );

}


Modal.Header = function(props) {

    var {dismiss, className, ...other} = props;

    var dismissButton = null;

    if (dismiss) {
        dismissButton = (
            <button type='button' className='close' aria-label='Close' onClick={dismiss}>
                <span aria-hidden="true">×</span>
            </button>
        );
    }

    return (
        <div className={classNames(className, 'modal-header')} {...props}>
            {props.children}
            {dismissButton}
        </div>
    );

}

Modal.Footer = function(props) {

    var {className, ...other} = props;

    return (
        <div className={classNames(className, 'modal-footer')} {...other}>
            {props.children}
        </div>
    );

}



Modal.Title = function(props) {

    var {tag : Tag = Modal.Title.defaultProps.tag, className, ...other} = props;

    return (
        <Tag className={classNames(className, 'modal-title')} {...other}>
            {props.children}
        </Tag>
    );
}

Modal.Title.defaultProps = {
    tag: 'h5'
};

