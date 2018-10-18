import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from '../tag';
import { isObject, isNumber } from 'util';

export default class Container extends React.Component  {


    static propTypes = {
        fluid : PropTypes.bool
    };

    static defaultProps = {
        fluid: false
    }

    render() {
        var {className, fluid, ...props} = this.props;

        className = classNames(className, {'container' : true});
        className = classNames(className, {'container-fluid' : fluid});

        return (
            <div className={className} {...props}>
                {this.props.children}
            </div>
        );
    }
};


Container.Col = function(props) {

    var {tag: Tag, className, baseClassName, width, xs, sm, md, lg, xl, ...other} = props;

    className = classNames(className, baseClassName);

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

    className = classNames(className, {[`col-`]:isObject(xs) ? xs.width : xs});

    addClasses('sm', sm);
    addClasses('md', md);
    addClasses('lg', lg);
    addClasses('xl', xl);


    return (
        <Tag className={className} {...other}>
            {props.children}
        </Tag>
    );
}

Container.Col.propTypes = {
    tag   : PropTypes.string,
    xs    : PropTypes.any,
    sm    : PropTypes.any,
    md    : PropTypes.any,
    lg    : PropTypes.any,
    xl    : PropTypes.any
};


Container.Col.defaultProps = {
    tag: 'div',
    baseClassName: 'col'
};


Container.Row = function(props) {

    var {className, ...other} = props;

    className = classNames(className, 'row');

    return (
        <div className={className} {...other}>
            {props.children}
        </div>
    );
}







