import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tag from '../tag';
import {transformProps} from '../utils';


export default function Icon(props) {

    var {icon, children, ...props} = props;

    if (!icon) {
        icon = 'div';
        children = 'No icon specified';
    }

    return (
        <Tag tag={icon} {...props}>
            {children}
        </Tag>
    );
};

Icon.defaultProps = {
};

Icon.propTypes = {
    icon : PropTypes.any
};

/*

export default function Icon(props) {

    var {icon : TheIcon, children, ...props} = transformProps(props);

    if (!TheIcon) {
        TheIcon = 'div';
        children = 'No icon specified';
    }

    return (
        <TheIcon {...props}>
            {children}
        </TheIcon>
    );
};

Icon.defaultProps = {
};

Icon.propTypes = {
    icon : PropTypes.any
};
*/