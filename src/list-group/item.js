import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * 
 * @visibleName ListGroup.Item 
 * 
 */
function Item(props) {
    var {tag, color, disabled, action, active, className, ...other} = props;

    className = classNames(className, {'list-group-item': true});
    className = classNames(className, {'disabled': disabled});
    className = classNames(className, {'active': active});
    className = classNames(className, {'list-group-item-action': action});
    className = classNames(className, {[`list-group-item-${color}`]:color});

    if (action) {
        tag = 'button';
        other['type'] = 'button';
    }
    return (
        <Tag tag={tag} className={className} {...other}/>
    );
}

Item.propTypes = {
    tag: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    action: PropTypes.bool

};

Item.defaultProps = {
    tag: 'li',
    active: false,
    disabled: false,
    action: false
};

export default Item;
