import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isString, isFunction} from '../utils';
import Tag from '../tag';

export default function Icon(props) {

    var {tag, src, icon, style, width, height, children, ...props} = props;

	if (icon && !src)
		src = icon;

    if (src && isFunction(src.default)) {
        src = src.default;
    }
        
    if (isString(src)) {
		props = {tag:'img', src:src, style:{width:width, height:height, ...style}, ...props};
    }
    else  {
		props = {tag:src, width:width, height:height, style:style, ...props};
	}

    return (
        <Tag {...props}>
            {children}
        </Tag>
    );
};

Icon.defaultProps = {
};

Icon.propTypes = {
    width  : PropTypes.any,
    height : PropTypes.any,
    icon   : PropTypes.any,
    src    : PropTypes.any
};
