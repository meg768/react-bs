import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

import Group from './group';
import Row from './row';
import Col from './col';
import Label from './label';

import Checkbox from '../input/checkbox';
import Input from '../input/input';
import Switch from '../input/switch';
import Radio from '../input/radio';


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

Form.Label = Label;
Form.Col = Col;
Form.Row = Row;
Form.Group = Group;

Form.Input = Input;
Form.Switch = Switch;
Form.Checkbox = Checkbox;
Form.Radio = Radio;


export default Form;