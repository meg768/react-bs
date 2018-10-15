import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import Tag from '../tag';

/**

A simple button

*/

export default class Button extends Component  {

    constructor(args) {
        super(args);

        this.onClick = this.onClick.bind(this);
    }



    static propTypes = {
        color : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

        /** Desired tag */
        tag        : PropTypes.string,

        /** Click handler */
        onClick    : PropTypes.func,

        /** Creates an outlined button */
        outline    : PropTypes.bool,

        /** Enabled/disabled */
        disabled   : PropTypes.bool
    };

    static defaultProps = {
        color    : 'primary',
        tag      : 'button',
        outline  : false,
        onClick  : null,
        disabled : false
    }

    onClick(event) {
        if (this.props.disabled) {
            event.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(event);
        }

    }

    render() {

        var {tag, className, outline, color, ...props} = this.props;

        className = classNames(className, 'btn');
        className = classNames(className, {[`btn-${color}`]:color});
        className = classNames(className, {[`btn-outline-${color}`]:outline});

        if (!tag) {
            tag = props.href ? 'a' : 'button';
        }

        // If a href is given and tag is 'button', replace with 'a'
        if (props.href && tag === 'button') {
            tag = 'a';
        }

        return (
            <Tag tag={tag} {...props} className={className} onClick={this.onClick}>
            </Tag>

        );
    }

};


