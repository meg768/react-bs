import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';

/**
 * 
 * @visibleName Progress.Bar
 */

export default function Component(props) {

    var {className, striped, style, role, min, max, value, children, ...props} = props;

    className = classNames(className, 'progress-bar');
    className = classNames(className, striped ? 'progress-bar-striped' : undefined);

    if (min) {
        props = {'aria-valuemin':min, ...props};
    }

    if (max) {
        props = {'aria-valuemax':max, ...props};
    }

    if (value) {
        props = {'aria-valuenow':value, ...props};
        style = {'width':`${value}%`, ...style};
    }

    return (
        <Tag className={className} role={role} style={style} {...props}>
            {children}
        </Tag>
    );

}


Component.propTypes = {
    /** Min value */
    min: PropTypes.number,
    /** Max value */
    max: PropTypes.number,
    /** Current value */
    value: PropTypes.number,
    /** Role */
    role: PropTypes.string
};

Component.defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    role: 'progressbar'
};

