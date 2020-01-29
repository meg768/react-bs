import {React, PropTypes, classNames} from '../utils';
import Tag from '../tag';

export default function Badge(props)  {
    var {color, pill, className, ...props} = props;

    className = classNames(className, 'badge');
    className = classNames(className, {[`badge-${color}`]:color});
    className = classNames(className, {[`badge-pill`]:pill});

    return <Tag className={className} {...props}/>;
};

Badge.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string
}

Badge.defaultProps = {
    className: 'badge',
    tag: 'span'
}

