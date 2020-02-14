import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
;

import Tag from '../tag';

/**
 * 
 * Specifies the header of a card.
 * 
 * @visibleName Card.Header
 */

export default function Component(props) {

    var {tag, className, ...props} = props;

    className = classNames(className, 'card-header');

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
