import {React, PropTypes} from '../utils';
import Tag from '../tag';

/**
 * 
 * Specifies the body of an alert.
 * 
 * @visibleName Alert.Body
 */

export default function Component(props)  {
    return (
        <Tag {...props}/>
    );
};

Component.propTypes = {
    /**
     * Default tag
     */
    tag: PropTypes.string
};

Component.defaultProps = {
    tag: 'div'
};


