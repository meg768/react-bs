import {React, PropTypes, isString} from '../utils';
import Tag from '../tag';


export default function Icon(props) {

    var {tag, icon, style, width, height, children, ...props} = props;

    if (icon == undefined) {
        tag = 'div';
        props = {};
        children = 'No icon specified';
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
