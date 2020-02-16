import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';

/**
 * @visibleName Table.Header
 */
export default function Component(props)  {

    var {className, light, dark, ...props} = props;

    className = classNames(className, {'thead-dark': dark});
    className = classNames(className, {'thead-light': light});

    return <Tag className={className} {...props}/>

};

Component.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    tag: PropTypes.string,
};

Component.defaultProps = {
    tag: 'thead',
    light: false,
    dark: false
};
