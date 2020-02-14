import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import Tag from '../tag';

/**
 * 
 * @visibleName Card.Subtitle
 */

export default function Component(props) {

    var {tag, className, ...props} = props;

    className = classNames(className, 'card-subtitle');

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

