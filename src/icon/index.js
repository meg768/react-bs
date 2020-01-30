import {React, PropTypes, isString, isFunction} from '../utils';
import Tag from '../tag';


export default function Icon(props) {

    var {tag, src, icon, style, width, height, children, ...props} = props;

    if (src && !icon)
        icon = src;

    if (icon && isFunction(icon.default))
        icon = icon.default;
        
    if (icon == undefined) {
        tag = 'div';
        props = {};
        children = ':(';
    }

    else if (isString(icon)) {
        tag = 'img';
        props = {src:icon, style:{width:width, height:height, ...style}, ...props};
    }

    else {
        tag = icon;
        props = {width:width, height:height, style:style, ...props};
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
    icon : PropTypes.any
};
