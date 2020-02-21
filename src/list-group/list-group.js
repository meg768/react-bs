import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';
import Item from './item';

function ListGroup(props)  {

    var {tag, flush, className, ...props} = props;

    className = classNames(className, {'list-group': true});
    className = classNames(className, {'list-group-flush': flush});

    return (
        <Tag tag={tag} {...props} className={className}/>
    );

};

ListGroup.propTypes = {
    tag: PropTypes.any,
    flush: PropTypes.bool
};

ListGroup.defaultProps = {
    tag: 'ul',
    flush: false
};

ListGroup.Item = Item;

export default ListGroup;