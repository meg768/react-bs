import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {uniqueID} from '../utils';
import Tag from '../tag';

/**
 * 
 * @visibleName Input.Radio
 * 
 */
function Radio(props) {

    var {children, id, ...props} = props;

    id = (id == undefined) ? uniqueID() : id;

    return (
        <div className="custom-control custom-radio">
            <Tag tag='input' type="radio" id={id} className="custom-control-input" {...props}/>
            <label className="custom-control-label" htmlFor={id}>
                {children}
            </label>
        </div>
    );
}


export default Radio;