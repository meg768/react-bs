import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

import Container from '../container';
import Tag from '../tag';

var _uniqueID = 0;


/**
 * 
 * Form
 * 
 * 
 */
export default class Form extends Component  {

    static defaultProps = {
        tag: 'form',
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


Form.Input = function(props)  {


    var {plainText, tag, size, className, ...props} = props;

    className = classNames(className, {'form-control':true});
    className = classNames(className, {'form-control-sm':size=='sm'});
    className = classNames(className, {'form-control-lg':size=='lg'});

    return (
        <Tag tag={tag} {...props} className={className}>
            {props.children}
        </Tag>

    );
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
    tag: PropTypes.string,
    inline: PropTypes.bool,
    muted: PropTypes.bool
};


Form.Radio = function(props) {

    var {checked, onChange, value, disabled, ...other} =  props;

    return (
        <Tag tag='div' className="form-check" {...other}>
            <input className="form-check-input" type="radio" value={value} checked={checked} disabled={disabled} onChange={onChange}/>
            <label className="form-check-label">
                {props.children}
            </label>
        </Tag>        
    );
}

Form.Checkbox = function(props) {

    var {checked, onChange, value, disabled, ...other} =  props;

    return (
        <Tag tag='div' className="form-check" {...other}>
            <input className="form-check-input" type="checkbox" value={value} checked={checked} disabled={disabled} onChange={onChange}/>
            <label className="form-check-label">
                {props.children}
            </label>
        </Tag>   
    );
}