import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

import Container from '../container';
import Tag from '../tag';
import {uniqueID} from '../utils';

var _uniqueID = 0;


/**
 * 
 * Form
 * 
 * 
 */
export default class Form extends Component  {

    static defaultProps = {
        tag: 'div',
        inline: false
    }

    constructor(args) {
        super(args);
    }

    render() {

        var {className, tag, inline, ...props} = this.props;

        className = classNames(className, {'form': true});
        className = classNames(className, {'form-inline': inline});

        return (
            <Tag tag={tag} {...props} className={className}>
                {this.props.children}
            </Tag>

        );
    }

};



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


Form.Input = class extends React.Component  {

    render() {

        var {plainText, tag, size, className, ...props} = this.props;

        className = classNames(className, {'form-control':true});
        className = classNames(className, {'form-control-sm':size=='sm'});
        className = classNames(className, {'form-control-lg':size=='lg'});
        className = classNames(className, {'form-control-plaintext':plainText});
    
        return (
            <Tag tag={tag} {...props} className={className}>
                {this.props.children}
            </Tag>
    
        );
    
    }
};

Form.Input.defaultProps = {
    tag: 'input'
};



Form.Label = function(props)  {

    var {tag, className, inline, muted, ...other} = props;

    className = classNames(className, {'text-muted': muted});
    className = classNames(className, {'col-form-label': inline});
    
    return (
        <Tag tag={tag} className={className} {...other}>
            {props.children}
        </Tag>
    );

};


Form.Label.defaultProps = {
    tag: 'label',
    inline: false,
    muted: false
};

Form.Label.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    inline: PropTypes.bool,
    muted: PropTypes.bool
};


Form.Radio = function(props) {

    var {children, id, ...other} = props;

    return (
        <Tag tag='div' className="form-check">
            <input id={id} className="form-check-input" type="radio"  {...other}/>
            <label className="form-check-label" htmlFor={id}>
                {children}
            </label>
        </Tag>        
    );
}

Form.Checkbox = function(props) {

    var {children, id, ...other} = props;

    return (
        <Tag tag='div' className="form-check" >
            <input id={id} className="form-check-input" type="checkbox" {...other}/>
            <label className="form-check-label" htmlFor={id}>
                {children}
            </label>
        </Tag>   
    );
}