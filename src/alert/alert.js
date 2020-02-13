import {React, PropTypes, classNames, isFunction} from '../utils';
import Tag from '../tag';
import AlertBody from './alert-body';
import AlertSeparator from './alert-separator';
import AlertHeader from './alert-header';

/**
 * 
 * 
 * See https://getbootstrap.com/docs/4.4/components/alerts for more information
 */
export default class Alert extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.dismissed = false;

        this.onDismiss = this.onDismiss.bind(this);
    }

    static propTypes = {
        /**
         * Alert type. May be one of primary, secondary, success, danger, warning, info, light or dark.
         */
        alert       : PropTypes.string,
        dismissable : PropTypes.any,
        role        : PropTypes.any,
        /**
         * Default tag
         */
        tag         : PropTypes.string
    };

    static defaultProps = {
        alert       : 'info',
        role        : 'alert',
        tag         : 'div',
        dismissable : false
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

        var {dismiss, dismissable, tag, color, alert, role, children, className, ...props} = this.props;


        if (color) {
            console.warn(`Use property alert istead of color in Alert.`);
            alert = color;
        }

        if (isFunction(dismiss)) {
            dismissable = true;
        }

        else if (dismiss) {
            console.warn(`Use property dismissable istead of dismiss in Alert.`);
            dismissible = dismiss;

        }

        className = classNames(className, {'alert': true});
        className = classNames(className, dismissable ? `alert-dismissible`: undefined);
        className = classNames(className, alert ? `alert-${alert}` : undefined);
        
        var dismissButton = null;

        if (dismissable) {
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
