import React from 'react';
import Component from './component.js';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from './tag.js';

export default class Container extends Component  {


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

    var {tag, className, xs, sm, md, lg, width, ...other} = props;

    className = classNames(className, 'col');

    className = classNames(className, {[`col-${xs}`]:width});
    className = classNames(className, {[`col-${xs}`]:xs});
    className = classNames(className, {[`col-sm-${sm}`]:sm});
    className = classNames(className, {[`col-md-${md}`]:md});
    className = classNames(className, {[`col-lg-${lg}`]:lg});

    return (
        <Tag tag={tag} className={className} {...other}/>
    );
}



Container.Col.propTypes = {
    tag   : PropTypes.string,
    xs    : PropTypes.number,
    sm    : PropTypes.number,
    md    : PropTypes.number,
    lg    : PropTypes.number,
    width : PropTypes.number
};


Container.Col.defaultProps = {
    tag: 'div'
};


Container.Row = function(props) {


    var {tag = 'div', className, ...other} = props;

    className = classNames(className, 'row');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );
}

Container.Row.propTypes = {
    tag: PropTypes.string
};

Container.Row.defaultProps = {
    tag: 'div'
};
