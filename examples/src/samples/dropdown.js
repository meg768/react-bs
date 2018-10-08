import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Container, Component, Row, Col, Popper, Button, Dropdown} from '../../../src/index.js';


function debug() {
    console.log.apply(null, arguments);
}




class DropdownSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.isOpen = false;
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isOpen:!this.state.isOpen});
    }


    render() {

        return  (
            <Dropdown toggle={this.toggle} isOpen={this.state.isOpen} placement={this.props.placement}>
                <Dropdown.Target>
                    <Button onClick={this.toggle}>
                        {this.props.name}
                    </Button>
                </Dropdown.Target>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.toggle}>
                        HEJ MEG
                    </Dropdown.Item>
                    <Dropdown.Item>
                        laksdjf
                    </Dropdown.Item>
                    <Dropdown.Separator/>
                    <Dropdown.Item onClick={this.toggle}>
                        Another action
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

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
                    <Col md={2}>
                        <DropdownSample name='Right Star' placement='right-start'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Left Start' placement='left-start'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Bottom' placement='bottom'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Bottom' placement='bottom'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Bottom Start' placement='bottom-start'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Button End' placement='bottom-end'/>
                    </Col>
                </Row>
            </Container>
        );

    }
}
