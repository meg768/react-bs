import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import PopperJs from 'popper.js';
import Fade from '../fade';
import Tag from '../tag';


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

    static propTypes = {
        dismiss : PropTypes.func,
        isOpen  : PropTypes.bool
    };

    static defaultProps = {
        tag : 'div',
        placement: 'bottom-start',
        isOpen : false,
        toggle : null,
        dismiss : null,
        modifiers: {
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

        if (this.props.dismiss)
            document.removeEventListener('click', this.onDocumentClick, true);

        this.destroyPopper();
    }

    onDocumentClick(event) {

        if (this.props.isOpen) {

            if (this.targetNode.contains(event.target)) {
                return;
            }

            if (!this.dropdownNode.contains(event.target)) {
                if (this.props.dismiss) {
                    this.props.dismiss();
                }
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
        return (React.cloneElement(target, {ref:(element) => {this.targetNode = ReactDOM.findDOMNode(element)}}));
    }

    renderDropdownMenu() {
        var menu = this.getDropdownMenu();
        return (React.cloneElement(menu, {isOpen:this.props.isOpen, ref:(element) => {this.dropdownNode = ReactDOM.findDOMNode(element)}}));
    }


    render() {
        var {tag, _name, placement, modifiers, isOpen, toggle, dismiss, ...props} = this.props;

        return (
            <Tag tag={tag} {...props}>
                {this.renderDropdownTarget()}
                {this.renderDropdownMenu()}
            </Tag>
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


    static defaultProps = {
        tag : 'div',
        isOpen : false
    };

    render() {

        var {tag, isOpen, className, ...props} = this.props;

        className = classNames(className, 'dropdown-menu');

        return (
            <Fade show={isOpen}>
                <Tag tag={tag} className={className} {...props}/>
            </Fade>
        );

    }
}




Dropdown.Item = function(props) {

    var {tag = 'div', style, className, ...other} = props;

    className = classNames(className, 'dropdown-item');
    style = Object.assign({}, style, {cursor:'pointer'});

    return (
        <Tag tag={tag} tabIndex={1} style={style} className={className} {...other}/>
    );
}

Dropdown.Separator = function(props) {

    var {tag = 'div', className, ...other} = props;

    className = classNames(className, 'dropdown-divider');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );
}
