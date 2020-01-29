import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tag from '../tag';
import {isString, transformProps} from '../utils';


export default function Icon(props) {

    var {tag, icon, children, ...props} = props;

    if (icon == undefined) {
        tag = 'div';
        children = 'No icon specified';    
    }
    else if (isString(icon)) {
        tag = 'img';
    }
    else {
        tag = icon;
    }

    return (
        <Tag tag={tag} {...props}>
            {children}
        </Tag>
    );
};

Icon.defaultProps = {
};

Icon.propTypes = {
    icon : PropTypes.any
};
