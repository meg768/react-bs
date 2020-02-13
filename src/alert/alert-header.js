import {React, PropTypes, classNames, isFunction} from '../utils';
import Tag from '../tag';

/**
 * 
 * Header
 * 
 * @visibleName Alert.Header
 * 
 */


export default function Component(props) {
    return <Tag {...props}/>;
};


Component.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string
};

Component.defaultProps = {
    tag: 'h5',
    className: 'alert-heading'
};

