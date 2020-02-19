import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';
import ProgressBar from './progress-bar';


export default function Progress(props) {

    var {className, children, ...props} = props;

    className = classNames(className, 'progress');

    return (
        <Tag className={className} {...props}>
            {children}
        </Tag>
    );
};


Progress.Bar = ProgressBar;
