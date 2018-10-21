import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import PopperJs from 'popper.js';
import Fade from '../fade';

function debug() {
    console.log.apply(null, arguments);
}




export default class Popover extends React.Component {

    constructor(args) {
        super(args);

        this.state = {};
        this.state.popper = null;
        this.state.isOpen = false;
        
        this.popper     = null;
        this.targetNode = null;
        this.popupNode  = null;
        this.arrowNode  = null;

        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onTargetClick   = this.onTargetClick.bind(this);

    }

    static propTypes = {
        target    : PropTypes.element,
        arrow     : PropTypes.bool,
        modifiers : PropTypes.any,
        placement : PropTypes.string
    };

    static defaultProps = {
        placement  : 'bottom-start',
        arrow      : true,
        modifiers  : {
            preventOverflow: {
                boundariesElement: 'viewport',
            }
        }
    }

    togglePopper() {
        if (this.state.isOpen)
            this.hidePopper();
        else
            this.showPopper();
    }

    showPopper() {
        this.createPopper();
        this.setState({isOpen:true});
    }

    hidePopper() {
        this.destroyPopper();
        this.setState({isOpen:false});
    }

    onTargetClick(event) { 
        this.togglePopper();
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocumentClick, true);

    }

    componentWillReceiveProps() {
    }

    componentDidUpdate(previousProps, previousState) {
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

        if (!this.popper) {
            this.popper = new PopperJs(this.targetNode, this.popupNode, options);
            this.updatePopper();
        }

    }

    destroyPopper() {
        if (this.popper) {
            this.popper.destroy();
        }
        this.popper = null;
    }

    updatePopper() {
        requestAnimationFrame(() => {
            if (this.popper) {
                this.popper.update();
            }
        });
    }


    onDocumentClick(event) {
        if (this.state.isOpen) {
            if (!this.targetNode.contains(event.target) && !this.popupNode.contains(event.target)) {
                this.hidePopper();
            }
        }
    }

    getChildOfType(type) {
        return React.Children.toArray(this.props.children).find((child) => {
            return child.type === type;
        })
    }

    getTarget() {
        var target = null;

        if (this.props.target)
            target = this.props.target;
        else {
            var popoverTarget = this.getChildOfType(Popover.Target);
            
            if (popoverTarget)
                target = popoverTarget.props.children;
        }

        return target;
    }



    renderTarget() {
        var target = this.getTarget();
        var style = Object.assign({}, {cursor:'pointer'}, target.props.style);
        return (React.cloneElement(target, {style:style, onClick:this.onTargetClick, ref:(element) => {this.targetNode = ReactDOM.findDOMNode(element)}}));
    }


    renderPopup() {


        var popoverClassName = 'popover';
        var isOpen = this.state.popper && this.state.isOpen;

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
