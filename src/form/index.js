import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

import Tag from '../tag';

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


Form.Group = class extends Component  {

    static propTypes = {
        xs    : PropTypes.number,
        sm    : PropTypes.number,
        md    : PropTypes.number,
        lg    : PropTypes.number,
        width : PropTypes.number
    };

    render() {

        var {className, xs, sm, md, lg, width, ...props} = this.props;

        className = classNames(className, 'form-group');

        className = classNames(className, {width:width});
        className = classNames(className, {[`col-${xs}`]:xs});
        className = classNames(className, {[`col-sm-${sm}`]:sm});
        className = classNames(className, {[`col-md-${md}`]:md});
        className = classNames(className, {[`col-lg-${lg}`]:lg});

        return (
            <div {...props} className={className}>
                {this.props.children}
            </div>

        );
    }

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
    var {tag : Tag = 'div', className, xs, sm, md, lg, width, ...other} = props;

    className = classNames(className, 'col');

    className = classNames(className, {[`col-${xs}`]:width});
    className = classNames(className, {[`col-${xs}`]:xs});
    className = classNames(className, {[`col-sm-${sm}`]:sm});
    className = classNames(className, {[`col-md-${md}`]:md});
    className = classNames(className, {[`col-lg-${lg}`]:lg});

    return (
        <Tag className={className} {...other}>
            {props.children}
        </Tag>
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

Form.Label = class extends React.Component  {

    render() {
        return (
            <label {...this.props}>
                {this.props.children}
            </label>

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

    var {checked, onChange, disabled, ...other} =  props;

    return (
        <div class="form-check" onClick={onChange} {...other}>
            <input class="form-check-input" type="radio" checked={checked} disabled={disabled}/>
            <label class="form-check-label">
                {props.children}
            </label>
        </div>        
    );
}


Form.Checkbox = function(props) {

    var {text, checked, disabled, ...other} =  props;

    return (
        <div class="form-check" {...other}>
            <input class="form-check-input" type="checkbox" checked={checked} disabled={disabled}/>
            <label class="form-check-label">
                {props.children}
            </label>
        </div>        
    );
}