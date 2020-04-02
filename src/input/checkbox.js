import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {uniqueID} from '../utils';
import Tag from '../tag';

/**
 * 
 * @visibleName Input.Checkbox
 * 
 */
function Checkbox(props) {

    var {children, id, ...props} = props;

    id = (id == undefined) ? uniqueID() : id;

    return (
        <div className="custom-control custom-checkbox">
            <Tag tag='input' type="checkbox" className="custom-control-input" id={id} {...props}/>
            <label className="custom-control-label" htmlFor={id}>
                {children}
            </label>
        </div>
    );
}


export default Checkbox;