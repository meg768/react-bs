import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {uniqueID} from '../utils';
import Tag from '../tag';

/**
 * 
 * @visibleName Input.Range
 * 
 */


function Range(props) {

    var {className, children, id, min, max, step, value, onChange, ...props} = props;

    if (onChange == undefined) {
        onChange = (event) => {
        };
    }

    id = (id == undefined) ? uniqueID() : id;

    className = classNames(className, 'custom-range');

    return (
        <Tag tag='input' type='range' value={value} onChange={onChange} className={className} min={min} max={max} step={step} id={id} {...props}/>
	);

}

Range.propTypes = {
    /** Specifies minimum value */
    min: PropTypes.any,
    /** Specifies maximum value */
    max: PropTypes.any,
    /** Specifies step value */
    step: PropTypes.any,
    /** Specifies current value */
    value: PropTypes.any,
    /** Called when value changes */
    onChange: PropTypes.func
};
Range.defaultProps = {
    min: 0,
    max: 100,
    step: 10,
    value: 0,
    onChange: undefined

};

export default Range;