import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from '../tag';
import {isFunction} from '../utils';

export default class Alert extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.dismissed = false;

        this.onDismiss = this.onDismiss.bind(this);
    }

    static propTypes = {
        color       : PropTypes.string,
        dismiss     : PropTypes.oneOf([PropTypes.bool, PropTypes.func]),
        tag         : PropTypes.string
    };

    static defaultProps = {
        color       : 'info',
        role        : 'alert',
        tag         : 'div',
        dismiss     : false
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
        className = classNames(className, {'alert-dismissible': dismiss});
        className = classNames(className, {[`alert-${color}`]:color});

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

/**
 * Alert Header
 */
Alert.Header = class extends Component  {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        tag: PropTypes.string
    };

    static defaultProps = {
        tag: 'h5'
    };

    render() {
        var {tag, className, ...other} = this.props;

        className = classNames(className, 'alert-heading');
    
        return <Tag tag={tag} className={className} {...other}/>;
    }        

};


Alert.Body = class extends Component  {

    constructor(props) {
        super(props);
        this.displayName = 'Alarm.Body';

    }
    static propTypes = {
        tag: PropTypes.string
    };

    static defaultProps = {
        tag: 'div'
    };


    render() {
        var {tag, ...other} = this.props;
        return <Tag tag={tag} {...other}/>;
    }
};
    
/*   


    

var Module = function(props)  {
    var {tag, ...other} = props;
    return <Tag tag={tag} {...other}/>;
};

Module.propTypes = {
    tag: PropTypes.string
};


Module.defaultProps = {
    tag: 'div'
};

Module.displayName = 'Alert.Body';

Alert.Body = Module;
export default Module;


*/

Alert.Separator = class extends Component  {

 
    static propTypes = {
        tag: PropTypes.string
    };

    static defaultProps = {
        tag: 'hr'
    };

    render() {
        var {tag, ...other} = this.props;

        return <Tag tag={tag}  {...other}/>;
    }        

};

