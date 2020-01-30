import {React, PropTypes, isObject, isNumber, isString, classNames} from '../utils';
import Tag from '../tag';

export default class Container extends React.Component  {


    static propTypes = {
        fluid : PropTypes.bool
    };

    static defaultProps = {
        tag: 'div',
        fluid: false
    }

    render() {
        var {tag, className, fluid, ...props} = this.props;

        className = classNames(className, {'container' : true});
        className = classNames(className, {'container-fluid' : fluid});

        return (
            <Tag tag={tag} className={className} {...props}/>
        );
    }
};


Container.Col = function(props) {

    var {tag, className, width, xs, sm, md, lg, xl, ...props} = props;

    className = classNames(className, 'col');

    function addClasses(type, value) {

        if (isObject(value)) {
            if (value.width)
                className = classNames(className, {[`col-${type}-${value.width}`]:value.width});

            if (value.offset)
                className = classNames(className, {[`offset-${type}-${value.offset}`]:value.offset});
        
        }
        else if (isNumber(value)) {
            className = classNames(className, {[`col-${type}-${value}`]:value});
        }
    }

    className = classNames(className, {[`col-${width}`]:isNumber(width)});


    addClasses('xs', xs);
    addClasses('sm', sm);
    addClasses('md', md);
    addClasses('lg', lg);
    addClasses('xl', xl);


    return (
        <Tag tag={tag} className={className} {...props}/>
    );
}

Container.Col.defaultProps = {
    tag: 'div'
};

Container.Col.propTypes = {
    tag   : PropTypes.string,
    xs    : PropTypes.any,
    sm    : PropTypes.any,
    md    : PropTypes.any,
    lg    : PropTypes.any,
    xl    : PropTypes.any
};


Container.Col.defaultProps = {
    tag: 'div'
};


Container.Row = function(props) {

    var {tag, cols, className, ...props} = props;

    className = classNames(className, 'row');

    if (isObject(cols)) {
        className = classNames(className, cols.xs ? `row-cols-xs-${cols.xs}` : undefined);
        className = classNames(className, cols.sm ? `row-cols-sm-${cols.sm}` : undefined);
        className = classNames(className, cols.md ? `row-cols-md-${cols.md}` : undefined);
        className = classNames(className, cols.lg ? `row-cols-lg-${cols.lg}` : undefined);
        className = classNames(className, cols.xl ? `row-cols-xl-${cols.xl}` : undefined);
    }

    if (isNumber(cols)) {
        className = classNames(className, `row-cols-${cols}`);
    }

    return (
        <Tag tag={tag} className={className} {...props}/>
    );
}

Container.Row.defaultProps = {
    tag: 'div'
};







