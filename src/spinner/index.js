import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {isNumber, isString} from '../utils';
import Tag from '../tag';

export default function Spinner(props)  {
    var {type, role, style, className, size, children, ...props} = props;

    className = classNames(className, type ? `spinner-${type}` : undefined);

    if (isString(size)) {
        if (size == 'xs')
            size = 1;
        else if (size == 'sm')
            size = 2;
        else if (size == 'md')
            size = 3;
        else if (size == 'lg')
            size = 4;
        else if (size == 'xl')
            size = 5;
    }

    if (isNumber(size)) {
        style = {...style, width:`${size}rem`, height:`${size}rem`};
    }

    return (
        <Tag role={role} className={className} style={style} {...props}>
            <span className='sr-only'>
                {children}
            </span>
        </Tag>
    );
};



Spinner.propTypes = {
    type     : PropTypes.string,
    role     : PropTypes.string,
    children : PropTypes.any,
    size     : PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Spinner.defaultProps = {
    type     : 'border',
    role     : 'status',
    children : 'Loading...'
}

