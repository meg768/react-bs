import {React, classNames, PropTypes} from '../utils';
import Tag from '../tag';

function debug() {
    console.log.apply(null, arguments);
}




export default class Modal extends React.Component {

    constructor(args) {
        super(args);

        this.state = {};
    }

    static propTypes = {
        show     : PropTypes.bool,
        centered : PropTypes.bool,
        role     : PropTypes.string
    };

    static defaultProps = {
        show     : false,
        centered : false,
        role     : 'dialog'
    }


    render() {
        var {className, centered, style, show, isOpen, ...props } = this.props;

        if (isOpen != undefined) {
            show = isOpen;
            console.error('Property isOpen is obsolete. Use show instead.');
        }

        className = classNames(className, {'modal': true});

        style = Object.assign({}, {backgroundColor:'rgba(0, 0, 0, 0.5)'}, style);

        return (
            <Fade show={show}>
                <div style={style} className={className} {...props}>
                    <div className={classNames('modal-dialog', {'modal-dialog-centered': centered})}>
                        <div className='modal-content'>
                           {this.props.children}            
                        </div>
                    </div>
                </div>

            </Fade>
        );

  }
}



Modal.Body = function(props) {

    var {className, ...other} = props;

    return (
        <div className={classNames(className, 'modal-body')} {...other}>
            {props.children}
        </div>
    );

}


Modal.Header = function(props) {

    var {tag, dismiss, className, ...other} = props;

    var dismissButton = null;

    if (dismiss) {
        dismissButton = (
            <button type='button' className='close' aria-label='Close' onClick={dismiss}>
                <span aria-hidden="true">×</span>
            </button>
        );
    }

    return (
        <Tag tag={tag} className={classNames(className, 'modal-header')} {...other}>
            {props.children}
            {dismissButton}
        </Tag>
    );

}

Modal.Header.defaultProps = {
    tag: 'div'
};

Modal.Footer = function(props) {

    var {tag = 'div', className, ...other} = props;

    return (
        <Tag tag={tag} className={classNames(className, 'modal-footer')} {...other}/>
    );

}



Modal.Title = function(props) {

    var {tag, className, ...other} = props;

    return (
        <Tag tag={tag} className={classNames(className, 'modal-title')} {...other}/>
    );
}

Modal.Title.defaultProps = {
    tag: 'h5'
};

