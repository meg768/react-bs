import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';

/**
 * 
 * A header for the alert. Defaults to a **h5** tag.
 * 
 * @visibleName Alert.Header
 * 
 */


export default function Component(props) {
    var {className, ...props} = props;

    className = classNames(className, 'alert-heading');

    return <Tag className={className} {...props}/>;
};


Component.propTypes = {
    /** Default tag */
    tag: PropTypes.string,
};

Component.defaultProps = {
    tag: 'h5'
};

