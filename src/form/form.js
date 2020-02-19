import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

import Group from './group';
import Row from './row';
import Col from './col';
import Input from './input';
import Checkbox from './checkbox';
import Switch from './switch';
import Label from './label';
import Radio from './radio';


function Form(props)  {

    var {className, tag, inline, ...props} = props;

    className = classNames(className, {'form': true});
    className = classNames(className, {'form-inline': inline});

    return (
        <Tag tag={tag} {...props} className={className}/>
    );

};

Form.defaultProps = {
    tag: 'div',
    inline: false
}

Form.Switch = Switch;
Form.Checkbox = Checkbox;
Form.Radio = Radio;
Form.Label = Label;
Form.Input = Input;
Form.Col = Col;
Form.Row = Row;
Form.Group = Group;


export default Form;