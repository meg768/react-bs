import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';

/**
 * @visibleName Table.Col
 */
export default function Component(props)  {

    var {className, header, color, ...props} = props;

    className = classNames(className, {[`table-${color}`]:color});

    return <Tag tag={header ? 'th' : 'td'} className={className} {...props}/>;

};

Component.propTypes = {
    color: PropTypes.string,
    header: PropTypes.bool
};

Component.defaultProps = {
    header: false
};
