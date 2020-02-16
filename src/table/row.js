import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';

/**
 * @visibleName Table.Row
 */
export default function Component(props)  {

    var {className, style, color, ...props} = props;

    className = classNames(className, {[`table-${color}`]:color});
    style = {textAlign:'left', ...style};

    return <Tag style={style} className={className} {...props}/>

};

Component.propTypes = {
    tag: PropTypes.string,
    color: PropTypes.string
};

Component.defaultProps = {
    tag: 'tr'
};
