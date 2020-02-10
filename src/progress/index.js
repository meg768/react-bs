import {React, PropTypes, classNames} from '../utils';
import Tag from '../tag';




export default function Progress(props) {

    var {className, children, ...props} = props;

    className = classNames(className, 'progress');

    return (
        <Tag className={className} {...props}>
            {children}
        </Tag>
    );
};



Progress.Bar = function(props) {

    var {className, striped, style, role, min, max, value, children, ...props} = props;

    className = classNames(className, 'progress-bar');
    className = classNames(className, striped ? 'progress-bar-striped' : undefined);

    if (min) {
        props = {'aria-valuemin':min, ...props};
    }

    if (max) {
        props = {'aria-valuemax':max, ...props};
    }

    if (value) {
        props = {'aria-valuenow':value, ...props};
        style = {'width':`${value}%`, ...style};
    }

    return (
        <Tag className={className} role={role} style={style} {...props}>
            {children}
        </Tag>
    );

}


Progress.Bar.propTypes = {
    /** Min value */
    min: PropTypes.any,
    /** Max value */
    max: PropTypes.any,
    /** Current value */
    value: PropTypes.any
};

Progress.Bar.defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    style: {},
    role: 'progressbar'
};

