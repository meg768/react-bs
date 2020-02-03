import {React, PropTypes, isObject, isNumber, isString, classNames} from '../utils';
import Tag from '../tag';

export default function Col(props) {

    var {className, col, width, offset, ...props} = props;

    if (width && !col)
        col = width;

    className = classNames(className, 'col');

    if (isObject(col)) {
        className = classNames(className, col.xs ? `col-${col.xs}` : undefined);

        className = classNames(className, col.xs ? `col-xs-${col.xs}` : undefined);
        className = classNames(className, col.sm ? `col-sm-${col.sm}` : undefined);
        className = classNames(className, col.md ? `col-md-${col.md}` : undefined);
        className = classNames(className, col.lg ? `col-lg-${col.lg}` : undefined);
        className = classNames(className, col.xl ? `col-xl-${col.xl}` : undefined);
    }
    else {
        className = classNames(className, col ? `col-${col}` : undefined);
    }

    if (isObject(offset)) {
        className = classNames(className, offset.xs ? `offset-xs-${offset.xs}` : undefined);
        className = classNames(className, offset.sm ? `offset-sm-${offset.sm}` : undefined);
        className = classNames(className, offset.md ? `offset-md-${offset.md}` : undefined);
        className = classNames(className, offset.lg ? `offset-lg-${offset.lg}` : undefined);
        className = classNames(className, offset.xl ? `offset-xl-${offset.xl}` : undefined);
    }
    else {
        className = classNames(className, offset ? `offset-${offset}` : undefined);
    }

    return (
        <Tag className={className} {...props}/>
    );
}

Col.defaultProps = {
};

Col.propTypes = {
    col    : PropTypes.any,
    offset : PropTypes.any,
    width  : PropTypes.any
};






