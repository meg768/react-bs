import {React, PropTypes, classNames} from '../utils';
import Tag from '../tag';


export default class Button extends React.Component  {

    constructor(args) {
        super(args);

        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        /** Color of button. One of ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] */
        color : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
        /** Button tag */
        tag : PropTypes.string,
        /** onClick handler */
        onClick : PropTypes.func,
        /** Outline button */
        outline : PropTypes.bool,
        /** Enabled/disabled */
        disabled : PropTypes.bool,
        /** Button size. One of ['xs', 'sm', 'md', 'lg', 'xl'] */
        size : PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    };

    static defaultProps = {
        color : 'primary',
        tag : 'button',
        size : undefined,
        outline : false,
        onClick : null,
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

        var {tag, size, className, outline, color, ...props} = this.props;

        className = classNames(className, 'btn');
        className = classNames(className, {[`btn-${color}`]:color && !outline});
        className = classNames(className, {[`btn-${size}`]:size});
        className = classNames(className, {[`btn-outline-${color}`]:outline});

        if (!tag) {
            tag = props.href ? 'a' : 'button';
        }

        // If a href is given and tag is 'button', replace with 'a'
        if (props.href && tag === 'button') {
            tag = 'a';
        }

        return (
            <Tag tag={tag} {...props} className={className} onClick={this.onClick}/>
        );
    }

};


