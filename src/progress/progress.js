import {React, PropTypes, classNames} from '../utils';
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
