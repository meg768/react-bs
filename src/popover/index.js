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

    constructor(props) {

        super(props);

        if (this.props.isOpen) {
            console.error('Property isOpen obsolete. Use show instead.');
        }

        this.state = {};
        this.state.popper = null;
        this.state.show   = false;
        
        this.popper     = null;
        this.targetNode = null;
        this.popupNode  = null;
        this.arrowNode  = null;

        this.onDocumentClick = this.onDocumentClick.bind(this);

    }

    static propTypes = {
        target      : PropTypes.element,
        toggle      : PropTypes.func,
        show        : PropTypes.bool,
        arrow       : PropTypes.bool,
        sticky      : PropTypes.bool,
        modifiers   : PropTypes.any,
        placement   : PropTypes.string
    };

    static defaultProps = {
        placement   : 'bottom-start',
        show        : false,
        arrow       : true,
        sticky      : false,
        modifiers   : {
            preventOverflow: {
                boundariesElement: 'viewport',
            }
        }
    }


    isOpen() {
        if (this.props.toggle != undefined)
            return this.props.show || this.props.isOpen;
        else
            return this.state.show;
    }

    togglePopper() {
        if (this.props.toggle)
            this.props.toggle();
        else {
            if (this.isOpen())
                this.hidePopper();
            else
                this.showPopper();

        }
    }

    showPopper() {
        this.createPopper();      
        this.setState({show:true});
    }

    hidePopper() {
        this.destroyPopper();
        this.setState({show:false});
    }


    componentDidUpdate(previousProps, previousState) {
        if (this.props.toggle) {
            
            
            if (previousProps.show != this.props.show) {
                if (this.isOpen())
                    this.showPopper();
                else
                    this.hidePopper();    
            }

            // Be compatible with name change
            if (previousProps.isOpen != this.props.isOpen) {
                if (this.isOpen())
                    this.showPopper();
                else
                    this.hidePopper();    
            }


        }
    }

    componentWillUnmount() {
        this.destroyPopper();
    }

    createPopper() {

        if (!this.popper) {
            var modifiers = {
                arrow: {element:this.arrowNode}
            };

            var options = {
                placement : this.props.placement,
                modifiers : modifiers,
                onCreate  : (state) => {this.setState({popper:state})},
                onUpdate  : (state) => {this.setState({popper:state})}
            };

            document.addEventListener('click', this.onDocumentClick, true);

            this.popper = new PopperJs(this.targetNode, this.popupNode, options);
            this.updatePopper();
        }

    }

    destroyPopper() {
        if (this.popper) {
            document.removeEventListener('click', this.onDocumentClick, true);

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
        if (this.isOpen()) {
            if (!this.props.sticky) {
                if (!this.targetNode.contains(event.target) && !this.popupNode.contains(event.target)) {
                    this.togglePopper();
                }    
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

        // Add some styles
        var style = Object.assign({}, {cursor:'pointer'}, target.props.style);

        var onClick = () => {
            this.togglePopper();

            if (!this.props.toggle && target.props.onClick) {
                target.props.onClick();

            }
        }

        return (React.cloneElement(target, {style:style, onClick:onClick, ref:(element) => {this.targetNode = ReactDOM.findDOMNode(element)}}));
    }


    renderPopup() {


        var popoverClassName = 'popover';
        var show = this.state.popper && this.isOpen();

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
            <Fade show={show}>
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
