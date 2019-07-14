import React from 'react';
import PropTypes from "prop-types";

import Tag from '../tag';

export default function Spinner(props)  {
    var {type, ...props} = props;

    if (type == undefined)
        type = 'border';

    var className = 'spinner-' + type;

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

