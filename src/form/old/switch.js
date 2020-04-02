import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {uniqueID} from '../utils';
import Tag from '../tag';

/**
 * 
 * @visibleName Form.Switch
 * 
 */
function Switch(props) {

    var {className, children, tag, id, ...props} = props;
    
	className = classNames(className, 'custom-control custom-switch');

    id = (id == undefined) ? uniqueID() : id;

    return (
        <Tag tag={tag} className={className} style={{display:'inherit'}}>
            <Tag tag='input' id={id} className="custom-control-input" type="checkbox" {...props}/>
            <label className="custom-control-label" htmlFor={id} style={{cursor:'pointer'}}>
                {children || <span>&nbsp;</span>}
            </label>
        </Tag>   
	);
}

Switch.propTypes = {
    /** Default tag */
    tag: PropTypes.string
};

Switch.defaultProps = {
    tag: 'div'
};

export default Switch;