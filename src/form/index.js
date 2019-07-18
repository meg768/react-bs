import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

import Container from '../container';
import Tag from '../tag';


export default function Form(props)  {

    var {className, tag, inline, ...props} = props;

    className = classNames(className, {'form': true});
    className = classNames(className, {'form-inline': inline});

    return (
        <Tag tag={tag} {...props} className={className}>
            {props.children}
        </Tag>

    );

};

Form.defaultProps = {
    tag: 'div',
    inline: false
}


Form.Group = function(props)  {

    var {row, className, ...other} = props;

    className = classNames(className, {'row': row});

    return (
        <Container.Col className={className} baseClassName='form-group'  {...other}>
            {props.children}
        </Container.Col>
    );
}

Form.Row = function(props) {

    var {tag = 'div', className, ...other} = props;
    className = classNames(className, 'form-row');

    return (
        <Tag tag={tag} {...other} className={className}>
            {props.children}
        </Tag>

    );
}

Form.Col = function(props) {

    return (
        <Container.Col {...props}>
            {props.children}
        </Container.Col>
    );
}


Form.Input = function(props)  {


    var {plainText, tag, size, className, ...props} = props;

    className = classNames(className, {'form-control':true});
    className = classNames(className, {'form-control-sm':size=='sm'});
    className = classNames(className, {'form-control-lg':size=='lg'});
    className = classNames(className, {'form-control-plaintext':plainText});

    return (
        <Tag tag={tag} className={className} {...props}>
            {props.children}
        </Tag>

    );

};

Form.Input.defaultProps = {
    tag: 'input'
};



Form.Label = function(props)  {

    var {tag, className, inline, ...props} = props;

    className = classNames(className, {'col-form-label': inline});
    
    return (
        <Tag tag={tag} className={className} {...props}>
            {props.children}
        </Tag>
    );

};


Form.Label.defaultProps = {
    tag: 'label',
    inline: false
};

Form.Label.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    inline: PropTypes.bool
};


Form.Radio = function(props) {

    var {children, id, ...props} = props;
    
    return (
        <Tag tag='div' className="form-check" {...props}>
            <input id={id} className="form-check-input" type="radio"/>
            <label className="form-check-label" htmlFor={id}>
                {children}
            </label>
        </Tag>        
    );
}

Form.Checkbox = function(props) {

    var {children, id, ...props} = props;

    return (
        <Tag tag='div' className="form-check" {...props}>
            <input id={id} className="form-check-input" type="checkbox"/>
            <label className="form-check-label" htmlFor={id}>
                {children}
            </label>
        </Tag>   
    );
}