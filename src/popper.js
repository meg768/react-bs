import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import PopperJs from 'popper.js';

function debug() {
    console.log.apply(null, arguments);
}

export default class Popper extends React.Component {

    constructor(args) {
        super(args);

        this.state = {popper:null};

        this.popper = null;
        this.referenceNode = null;
        this.popupNode = null;

        this.onCreate = this.onCreate.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    static propTypes = {
        popup : PropTypes.element.isRequired,
        placement : PropTypes.string,
        toggle : PropTypes.func
    };

    static get defaultProps() {
        return {
            placement: 'bottom-start',
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

        this.instantiatePopper();
    }

    componentWillReceiveProps() {
        if (!this.popper) {
            this.instantiatePopper();
        }
        this.updatePopper();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocumentClick, true);

        if (this.popper) {
            this.popper.destroy();
        }
    }

    instantiatePopper() {

        var options = {
            placement : this.props.placement,
            modifiers : this.props.modifiers,
            onCreate  : this.onCreate,
            onUpdate  : this.onUpdate

        };

        this.popper = new PopperJs(this.referenceNode, this.popupNode, options);

        this.updatePopper();
    }

    onCreate(state) {
        this.setState({popper:state});
    }

    onUpdate(state) {
        this.setState({popper:state});
    }


    onDocumentClick(event) {

        if (this.props.isOpen) {
            if (this.props.toggle && !this.popupNode.contains(event.target)) {
                this.props.toggle();
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


    getPopupStyle() {

        var unit = '0.2rem';

        if (!this.state.popper)
            return {};

        var style = {};
        style.display = this.props.isOpen ? 'block' : 'none';

        style = Object.assign({}, this.props.popup.props.style, style);

        switch(this.state.popper.placement) {
            case 'right-start':
            case 'right-end':
            case 'right': {
                style.marginLeft = unit;
                break;
            }
            case 'left-start':
            case 'left-end':
            case 'left': {
                style.marginRight = unit;
                break;
            }
        }

        return style;
    }

    renderReference() {

        if (this.props.reference) {
            return (React.cloneElement(this.props.reference, {ref:(element) => {this.referenceNode = ReactDOM.findDOMNode(element)}}));
        }
        else {
            var children = React.Children.toArray(this.props.children);

            if (children.length > 1) {

                return (
                    <div ref={(element) => {this.referenceNode = ReactDOM.findDOMNode(element)}}>
                        {children}
                    </div>

                );
            }
            else {
                return (React.cloneElement(children[0], {ref:(element) => {this.referenceNode = ReactDOM.findDOMNode(element)}}));

            }

        }
    }


    renderPopupElement() {
        if (this.props.popup) {
            return (React.cloneElement(this.props.popup, {style:this.getPopupStyle(), ref:(element) => {this.popupNode = ReactDOM.findDOMNode(element)}}));
        }
        else
            return null;

    }


    renderPopup() {
        if (this.props.popup) {
            return this.renderPopupElement();

        }
        else
            return null;

    }


    render() {
        return (
            <div>
                {this.renderReference()}
                {this.renderPopup()}
            </div>
        );

    }
}



Popper.Reference = class extends React.Component {

    constructor(args) {
        super(args);

    }

    render() {
        return (
            <div/>
        );
    }

}


Popper.Popup = class extends React.Component {

    constructor(args) {
        super(args);

    }

    render() {
        return (
            <div/>
        );
    }
}
