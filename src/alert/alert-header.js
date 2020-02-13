import {React, PropTypes, classNames, isFunction} from '../utils';
import Tag from '../tag';

/**
 * 
 * A header for the alert. Defaults to a **h5** tag.
 * 
 * @visibleName Alert.Header
 * 
 */


export default function Component(props) {
    return <Tag {...props}/>;
};


Component.propTypes = {
    /**
     * Default tag
     */
    tag: PropTypes.string,


    className: PropTypes.string
};

Component.defaultProps = {

    tag: 'h5',
    className: 'alert-heading'
};

