import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

import Container from '../container';

var _uniqueID = 0;


/**
 * 
 * Form
 * 
 * 
 */
export default class Form extends Component  {

    static get defaultProps() {
        return {
        };
    }

    constructor(args) {
        super(args);
    }

    render() {

        var {className, ...props} = this.props;

        className = classNames('form', className);

        return (
            <form {...props} className={className}>
                {this.props.children}
            </form>

        );
    }

};


Form.Group = function(props)  {

    var {row, ...other} = props;

    return (
        <Container.Col baseClassName='form-group' row={row} {...other}>
            {props.children}
        </Container.Col>
    );
}

Form.Row = class extends Component {

    render() {

        var {className, ...props} = this.props;
        className = classNames(className, 'form-row');

        return (
            <div {...props} className={className}>
                {this.props.children}
            </div>

        );
    }
}

Form.Col = function(props) {

    return (
        <Container.Col {...props}>
            {props.children}
        </Container.Col>
    );
}


Form.Input = class extends React.Component  {


    static propTypes = {
        plainText : PropTypes.bool
    };

    static get defaultProps() {
        return {
            type: 'text'
        };
    }

    render() {

        var {plainText, className, ...props} = this.props;

        className = classNames(className, {'form-control':true});
        className = classNames(className, {'form-control-plainText':plainText});

        return (
            <input {...props} className={className}>
                {this.props.children}
            </input>

        );
    }

};



Form.Label = function(props)  {

    var {tag : Tag = 'label', ...other} = props;

    return (
        <Tag {...other}>
            {props.children}
        </Tag>
    );

};


Form.Radio = function(props) {

    var {checked, onChange, value, disabled, ...other} =  props;

    return (
        <div className="form-check" {...other}>
            <input className="form-check-input" type="radio" value={value} checked={checked} disabled={disabled} onChange={onChange}/>
            <label className="form-check-label">
                {props.children}
            </label>
        </div>        
    );
}

Form.Checkbox = function(props) {

    var {checked, onChange, value, disabled, ...other} =  props;

    return (
        <div className="form-check" {...other}>
            <input className="form-check-input" type="checkbox" value={value} checked={checked} disabled={disabled} onChange={onChange}/>
            <label className="form-check-label">
                {props.children}
            </label>
        </div>        
    );
}