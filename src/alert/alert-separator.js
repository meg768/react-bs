import {React, PropTypes, classNames, isFunction} from '../utils';
import Tag from '../tag';

/**
 * 
 * @visibleName Alert.Separator
 * 
 */
export default function Component(props) {

    return (
        <Tag {...props}/>
    );
};

Component.propTypes = {
    tag: PropTypes.string
};

Component.defaultProps = {
    tag: 'hr'
};
