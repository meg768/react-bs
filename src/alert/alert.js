import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {isFunction} from '../utils';
import Tag from '../tag';

import Body from './body';
import Separator from './separator';
import Header from './header';

/**
 * 
 * Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 * 
 */
export default class Alert extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.dismissed = false;

        this.onDismiss = this.onDismiss.bind(this);
    }

    static propTypes = {
        /** [Color of alert](https://getbootstrap.com/docs/4.4/components/alerts/#examples) */
        color : PropTypes.any,
        /** [Dismissable appearance](https://getbootstrap.com/docs/4.4/components/alerts/#dismissing)*/
        dismiss : PropTypes.any,
        /** Role */
        role : PropTypes.any,
        /** Default tag */
        tag : PropTypes.string
    };

    static defaultProps = {
        color : 'info',
        role : 'alert',
        tag : 'div',
        dismiss : false
    };

    onDismiss() {

        if (isFunction(this.props.dismiss))
            this.props.dismiss();
        else
            this.setState({dismissed:true});

    }

    render() {
        if (this.state.dismissed)
            return null;

        var {dismiss, tag, color, role, children, className, ...props} = this.props;

        className = classNames(className, {'alert': true});
        className = classNames(className, dismiss ? `alert-dismissible`: undefined);
        className = classNames(className, alert ? `alert-${color}` : undefined);
        
        var dismissButton = null;

        if (dismiss) {
            dismissButton = (
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.onDismiss}>
                    <span aria-hidden="true">&times;</span>
                </button>
            );
        }

        return (
            <Tag tag={tag} className={className} role={role} {...props}>
                {dismissButton}
                {children}
            </Tag>

        );

    }
};

Alert.Header = Header;
Alert.Separator = Separator;
Alert.Body = Body;
