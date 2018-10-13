import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Component from './component.js';
import Tag from './tag.js';

export default class Alert extends Component  {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.dismissed = false;

        this.onDismiss = this.onDismiss.bind(this);
    }

    static propTypes = {
        color       : PropTypes.string,
        dismissable : PropTypes.bool,
        tag         : PropTypes.string
    };

    static defaultProps = {
        color       : 'info',
        role        : 'alert',
        tag         : 'div',
        dismissable : false
    };

    onDismiss() {
        this.setState({dismissed:true});
    }

    render() {
        if (this.state.dismissed)
            return null;

        var {dismissable, tag, color, role, children, className, ...props} = this.props;

        className = classNames(className, {'alert': true});
        className = classNames(className, {'alert-dismissible': dismissable});
        className = classNames(className, {[`alert-${color}`]:color});

        var dismiss = null;

        if (dismissable) {
            dismiss = (
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.onDismiss}>
                    <span aria-hidden="true">&times;</span>
                </button>
            );
        }


        return (
            <Tag tag={tag} className={className} role={role} {...props}>
                {dismiss}
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

