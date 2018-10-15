import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from '../tag'

export default class ListGroup extends React.Component  {

    static propTypes = {
    };

    static defaultProps = {
        tag: 'ul',
        flush: false
    };

    
    render() {
        var {tag, flush, className, ...props} = this.props;

        className = classNames(className, {'list-group': true});
        className = classNames(className, {'list-group-flush': flush});

        return (
            <Tag tag={tag} {...props} className={className}/>
        );
 
    }
};


ListGroup.Item = function(props) {
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

ListGroup.Item.defaultProps = {
    tag: 'li',
    active: false,
    disabled: false,
    action: false
};

