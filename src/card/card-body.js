import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import Tag from '../tag';

/**
 * 
 * Specifies the body of a card.
 * 
 * @visibleName Card.Body
 */

export default function Component(props) {

    var {tag, className, ...props} = props;

    className = classNames(className, 'card-body');

    return (
        <Tag tag={tag} className={className} {...props}/>
    );

}

Component.propTypes = {
    /** Default tag */
    tag: PropTypes.string
};

Component.defaultProps = {
    tag: 'div'
};

