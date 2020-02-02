import {React, PropTypes, isObject, isString, isFunction} from '../utils';
import Tag from '../tag';

export default function Icon(props) {

    var {tag, src, icon, style, width, height, children, ...props} = props;

    if (icon && isFunction(icon.default)) {
        icon = icon.default;
    }
        
    if (isString(src)) {
        tag = 'img', props = {src:src, style:{width:width, height:height, ...style}, ...props};
    }
    else if (isFunction(icon)) {
        tag = icon, props = {width:width, height:height, style:style, ...props};
    }

    return (
        <Tag tag={tag} {...props}>
            {children}
        </Tag>
    );
};

Icon.defaultProps = {
};

Icon.propTypes = {
    width  : PropTypes.any,
    height : PropTypes.any,
    icon   : PropTypes.any,
    src    : PropTypes.any
};
