import React from 'react';
import ReactDOM from 'react-dom';
import {ClickOutside, Form, Container, Component, Row, Col, Popper, Button} from '../../../src/index.js';
//import {*} from '../../../src/index.js';




function debug() {
    console.log.apply(null, arguments);
}




class DropdownSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.isOpen = false;
        this.toggle = this.toggle.bind(this);
        this.onAction = this.onAction.bind(this);

    }



    onAction(event) {
        this.setState({isOpen:false});
    }


    toggle() {
        this.setState({isOpen:!this.state.isOpen});
    }


    renderPopup() {

        return (
                <div className="dropdown-menu show" role='menu'>
                  <a className="dropdown-item" onClick={this.onAction}>Action</a>
                  <a className="dropdown-item" onClick={this.onAction}>Another action</a>
                  <a className="dropdown-item" onClick={this.onAction}>Something else here</a>
                </div>

        );
    }

    renderReference(text) {

        return (
            <Button onClick={this.toggle}>
                {text}
            </Button>

        );
    }
    render() {
        var modifiers = {};

        return (
            <div>
                <Popper toggle={this.toggle} isOpen={this.state.isOpen} placement='bottom-start' modifiers={modifiers} popup={this.renderPopup()}>
                    {this.renderReference('Inline')}
                </Popper>
            </div>
        );


    }


}



export default class Module extends React.Component {


    constructor(args) {

        super(args);

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={1}>
                        <DropdownSample/>
                    </Col>
                    <Col md={10}>
                        <DropdownSample/>
                    </Col>
                    <Col md={1}>
                        <DropdownSample/>
                    </Col>
                </Row>
            </Container>
        );

    }
}
