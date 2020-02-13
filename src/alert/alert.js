import {React, PropTypes, classNames, isFunction} from '../utils';
import Tag from '../tag';
import AlertBody from './alert-body';
import AlertSeparator from './alert-separator';
import AlertHeader from './alert-header';

export default class Alert extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.dismissed = false;

        this.onDismiss = this.onDismiss.bind(this);
    }

    static propTypes = {
        color       : PropTypes.string,
        dismiss     : PropTypes.any,
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
        className = classNames(className, {'alert-dismissible': dismiss != undefined});
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

Alert.Header = AlertHeader;
Alert.Separator = AlertSeparator;
Alert.Body = AlertBody;
