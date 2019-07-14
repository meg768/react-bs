import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

import Tag from '../tag';

export default function Spinner(props)  {
    var {type, className, ...props} = props;

    if (type == undefined)
        type = 'border';

    className = classNames(className, 'spinner-' + type);

    return (
        <Tag tag='div' role='status' className={className} {...props}>
            <span className='sr-only'>Loading...</span>
        </Tag>
    );
};

Spinner.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.string
}

Spinner.defaultProps = {
    type: 'border',
    tag: 'div'
}

