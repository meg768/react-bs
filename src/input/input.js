import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

import Range from './range';
import Switch from './switch';
import Radio from './radio';
import Checkbox from './checkbox';


/**
 * 
 * @visibleName Input
 * 
 */

var Input = React.forwardRef((props, ref) => {

    var {children, plainText, tag, size, className, ...props} = props;

    className = classNames(className, {'form-control':true});
    className = classNames(className, {'form-control-sm':size=='sm'});
    className = classNames(className, {'form-control-lg':size=='lg'});
    className = classNames(className, {'form-control-plaintext':plainText});

    return (
        <Tag tag={tag} ref={ref} className={className} {...props}/>
    );

});

Input.propTypes = {
    /** Default tag */
    tag: PropTypes.any,
    /** [Plain text](https://getbootstrap.com/docs/4.4/components/forms/#readonly-plain-text) */
    plainText: PropTypes.bool,
    /** [Size](https://getbootstrap.com/docs/4.4/components/forms/#sizing), **sm** or **lg** */
    size: PropTypes.string
};


Input.defaultProps = {
    tag: 'input',
    plainText: false,
    size: undefined
};



Input.Range = Range;
Input.Switch = Switch;
Input.Radio = Radio;
Input.Checkbox = Checkbox;


export default Input;