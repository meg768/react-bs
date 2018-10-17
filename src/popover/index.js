import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import PopperJs from 'popper.js';

function debug() {
    console.log.apply(null, arguments);
}




export default class Popover extends React.Component {

    constructor(args) {
        super(args);

        this.state = {popper:null};

        this.popper = null;
        this.targetNode = null;
        this.popupNode = null;
        this.arrowNode = null;

        this.onDocumentClick = this.onDocumentClick.bind(this);

    }

    static propTypes = {
        target    : PropTypes.element,
        arrow     : PropTypes.bool,
        isOpen    : PropTypes.bool,
        modifiers : PropTypes.any,
        placement : PropTypes.string,
        dismiss   : PropTypes.func
    };

    static defaultProps = {
        placement  : 'bottom-start',
        isOpen     : false,
        arrow      : true,
        modifiers  : {
            preventOverflow: {
                boundariesElement: 'viewport',
            }
        }
    }

    componentDidMount() {
        if (this.props.dismiss)
            document.addEventListener('click', this.onDocumentClick, true);

        this.createPopper();
    }

    componentWillReceiveProps() {
        if (!this.popper) {
            this.createPopper();
        }

        this.updatePopper();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocumentClick, true);

        this.destroyPopper();
    }

    createPopper() {

        var modifiers = {
            arrow: {element:this.arrowNode}
        };

        var options = {
            placement : this.props.placement,
            modifiers : modifiers,
            onCreate  : (state) => {this.setState({popper:state})},
            onUpdate  : (state) => {this.setState({popper:state})}
        };

        this.popper = new PopperJs(this.targetNode, this.popupNode, options);

        this.updatePopper();
    }

    destroyPopper() {
        if (this.popper) {
            this.popper.destroy();
        }
    }

    onDocumentClick(event) {

        if (this.props.isOpen) {
            if (this.props.dismiss && !this.popupNode.contains(event.target)) {
                this.props.dismiss();
            }

        }
    }

    updatePopper() {
        requestAnimationFrame(() => {
            if (this.popper) {
                this.popper.update();
            }
        });
    }

    getChildOfType(type) {
        return React.Children.toArray(this.props.children).find((child) => {
            return child.type === type;
        })

    }

    getTarget() {
        if (this.props.target)
            return this.props.target;

        return this.getChildOfType(Popover.Target);
    }



    renderTarget() {
        return (React.cloneElement(this.getTarget(), {ref:(element) => {this.targetNode = ReactDOM.findDOMNode(element)}}));
    }


    renderPopup() {


        var popoverClassName = 'popover';
        var isOpen = this.state.popper && this.props.isOpen;

        if (this.state.popper) {

            switch (this.state.popper.placement) {
                case 'left':
                case 'left-start':
                case 'left-end': {
                    popoverClassName = classNames(popoverClassName, 'bs-popover-left');
                    break;
                }
                case 'right':
                case 'right-start':
                case 'right-end': {
                    popoverClassName = classNames(popoverClassName, 'bs-popover-right');
                    break;
                }
                case 'top':
                case 'top-start':
                case 'top-end': {
                    popoverClassName = classNames(popoverClassName, 'bs-popover-top');
                    break;
                }
                case 'bottom':
                case 'bottom-start':
                case 'bottom-end': {
                    popoverClassName = classNames(popoverClassName, 'bs-popover-bottom');
                    break;
                }
            }

        }

        var arrow = null;

        if (this.props.arrow) {
            arrow = (
                <div className='arrow' ref={(element) => {this.arrowNode = element}}>
                </div>
            );
        }

        var children = this.props.children;

        if (this.getChildOfType(Popover.Target)) {
            children = [];
            children.push(this.getChildOfType(Popover.Header));
            children.push(this.getChildOfType(Popover.Body));
        }
        return (
            <Fade show={isOpen}>
                <div className={popoverClassName}  ref={(element) => {this.popupNode = element}}>
                    {arrow}
                    {children}
                </div>
            </Fade>
        );

    }


    render() {
        return (
            <div>
                {this.renderTarget()}
                {this.renderPopup()}
            </div>
        );

    }
}




Popover.Body = class extends React.Component {


    render() {
        var {className, props} = this.props;

        return (
            <div className={classNames(className, 'popover-body')} {...props}>
                {this.props.children}
            </div>
        );
    }

}


Popover.Header = class extends React.Component {

    render() {
        var {className, props} = this.props;

        return (
            <div className={classNames(className, 'popover-header')} {...props}>
                {this.props.children}
            </div>
        );
    }

}


Popover.Target = class extends React.Component {

    render() {

        return (
            this.props.children
        );
    }

}
