import {React, PropTypes, isObject, isNumber, isString, classNames} from '../utils';
import Tag from '../tag';

export default function Row(props) {

    var {cols, className, ...props} = props;

    className = classNames(className, 'row');

    if (isObject(cols)) {
        className = classNames(className, cols.xs ? `row-cols-xs-${cols.xs}` : undefined);
        className = classNames(className, cols.sm ? `row-cols-sm-${cols.sm}` : undefined);
        className = classNames(className, cols.md ? `row-cols-md-${cols.md}` : undefined);
        className = classNames(className, cols.lg ? `row-cols-lg-${cols.lg}` : undefined);
        className = classNames(className, cols.xl ? `row-cols-xl-${cols.xl}` : undefined);
    }
    else if (cols) {
        className = classNames(className, `row-cols-${cols}`);
    }

    return (
        <Tag className={className} {...props}/>
    );
}

Row.propTypes = {
    cols: PropTypes.any
};

Row.defaultProps = {
};







