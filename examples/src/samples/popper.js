import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Container, Component, Row, Col, Popper, Button} from '../../../src/index.js';
import Page from '../components/page.js'





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
        console.log('++++++++++++++++++++++++++++++++++++++++++++');
        this.setState({isOpen:false});
    }




    toggle() {
        this.setState({isOpen:!this.state.isOpen});
    }


    renderPopup() {

        return (
            <div className="dropdown-menu show" role='menu'>
              <a className="dropdown-item" onClick={this.onAction}>Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item">Something else here</a>
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
                <Popper isOpen={this.state.isOpen} placement='bottom-start' modifiers={modifiers} popup={this.renderPopup()}>
                    {this.renderReference('Inline')}
                </Popper>
            </div>
        );


    }


}



export default class Module extends React.Component {


    constructor(args) {

        super(args);

        this.onChange = this.onChange.bind(this);
        this.state = {
            email: 'meg@olle.se',
            isOpen: false
        };
    }

    onChange(event) {
        this.setState({email:event.target.value});
    }



    renderForm() {
        var columnStyle = {marginTop:'0.5em', marginBottom:'0.5em'};
        return (
            <form className='px-4 py-4'>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" onChange={this.onChange} value={this.state.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
                );
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col >
                        Text
                    </Col>
                    <Col md={8}>
                        <DropdownSample/>
                    </Col>
                    <Col >
                        Text
                    </Col>
                </Row>
            </Container>
        );

    }
}
