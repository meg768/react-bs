import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import PopperJs from 'popper.js';

function debug() {
    console.log.apply(null, arguments);
}

export default class Dropdown extends React.Component {

    constructor(args) {
        super(args);

        this.state = {popper:null};

        this.popper     = null;
        this.targetNode = null;
        this.dropdownNode  = null;

        this.onDocumentClick = this.onDocumentClick.bind(this);

    }

    static get defaultProps() {
        return {
            placement: 'bottom-start',
            isOpen : false,
            modifiers: {
                preventOverflow: {
                    boundariesElement: 'viewport',
                }
            }
        };
    }


    componentDidMount() {

        if (this.props.toggle)
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

        if (this.props.toggle)
            document.removeEventListener('click', this.onDocumentClick, true);

        this.destroyPopper();
    }

    onDocumentClick(event) {

        if (this.props.isOpen) {
            if (this.props.toggle && !this.dropdownNode.contains(event.target)) {
                this.props.toggle();
            }

        }
    }

    createPopper() {
        var options = {
            placement : this.props.placement,
            modifiers : this.props.modifiers,
            onCreate  : (state) => {this.setState({popper:state})},
            onUpdate  : (state) => {this.setState({popper:state})}

        };

        this.popper = new PopperJs(this.targetNode, this.dropdownNode, options);

        this.updatePopper();
    }

    destroyPopper() {
        if (this.popper) {
            this.popper.destroy();
        }

    }


    updatePopper() {
        requestAnimationFrame(() => {
            if (this.popper) {
                this.popper.update();
            }
        });
    }


    getDropdownTarget() {
        return React.Children.toArray(this.props.children).find((child) => {
            return child.type === Dropdown.Target;
        })
    }

    getDropdownMenu() {
        return React.Children.toArray(this.props.children).find((child) => {
            return child.type === Dropdown.Menu;
        });
    }


    renderDropdownTarget() {
        var target = this.getDropdownTarget();
        console.log('target', target);
        return (React.cloneElement(target, {ref:(element) => {this.targetNode = ReactDOM.findDOMNode(element)}}));
    }

    renderDropdownMenu() {
        var menu = this.getDropdownMenu();
        console.log('menu', menu);
        return (React.cloneElement(menu, {isOpen:this.props.isOpen, ref:(element) => {this.dropdownNode = ReactDOM.findDOMNode(element)}}));
    }


    render() {


        return (
            <div>
                {this.renderDropdownTarget()}
                {this.renderDropdownMenu()}
            </div>
        );

    }
}




Dropdown.Target = class extends React.Component {

    render() {

        return (
            this.props.children
        );

    }
}


Dropdown.Menu = class extends React.Component {


    static propTypes = {
        isOpen : PropTypes.bool
    };


    static get defaultProps() {
        return {
            isOpen : false
        };
    }

    render() {

        var {style, isOpen, className, ...props} = this.props;

        className = classNames(className, 'dropdown-menu show');
        style = Object.assign({}, style, {display:isOpen ? 'block' : 'none'});

        return (
            <div style={style} className={className} {...props}>
                {this.props.children}
            </div>
        );

    }
}


Dropdown.Item = class extends React.Component {


    render() {

        var {style, className, ...props} = this.props;

        className = classNames(className, 'dropdown-item');
        style = Object.assign({}, {cursor: 'pointer'});

        return (
            <div style={style} className={className} {...props}>
                {this.props.children}
            </div>
        );

    }
}


Dropdown.Separator = class extends React.Component {


    render() {
        return (
            <div className="dropdown-divider"></div>
        );

    }
}
