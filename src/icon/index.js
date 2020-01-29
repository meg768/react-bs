import React, {Component} from 'react';
import {transformProps} from '../utils';


export default function Icon(props) {

    var {icon : TheIcon, ...props} = transformProps(props);

    return (
        <TheIcon {...props}/>
    );
};

Icon.defaultProps = {
};
