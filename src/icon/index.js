import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {transformProps} from '../utils';


export default function Icon(props) {

    var {icon : TheIcon, ...props} = transformProps(props);

    return (
        <TheIcon {...props}/>
    );
};

Icon.defaultProps = {
};

Icon.propTypes = {
    icon : PropTypes.any
};
