import React from 'react';
import { render} from 'react-dom';
import {Component, Container, Form, Button, ButtonRow} from '../../src';
import {Page} from './page.js';

import './bootstrap/materia/bootstrap.min.css';

class Sample extends Component {


    constructor(props) {
        super(props);

        this.state = {};
        this.state.stock = {};
        this.state.stock.symbol   = 'AAPL';
        this.state.stock.name     = 'Name';
        this.state.stock.industry = 'Industry';
        this.state.stock.exchange = 'Exchange';
        this.state.stock.sector   = 'Sector';

        this.state.loading = false;


        this.onChange = this.onChange.bind(this);


    }

    onChange(event) {
        var stock = this.state.stock;
        stock[event.target.id] = event.target.value;
        this.setState({stock:stock});
    }

    render() {
        return (


            <Page>
                <Form>
                    <Form.Group>
                        <Form.Label for="symbol">Symbol</Form.Label>
                        <Form.Input type="text" readOnly plainText id="symbol" value={this.state.stock.symbol}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label for="name">Namn</Form.Label>
                        <Form.Input id='name' type="text" disabled={this.state.loading} value={this.state.stock.name} placeholder="Namn" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group md={6}>
                            <Form.Label for="industry">Industri</Form.Label>
                            <Form.Input id='industry' type="text" disabled={this.state.loading} value={this.state.stock.industry} placeholder="Industri" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group md={6}>
                            <Form.Label for="sector">Sektor</Form.Label>
                            <Form.Input id='sector' type="text" disabled={this.state.loading} value={this.state.stock.sector} placeholder="Sektor" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group md={6}>
                            <Form.Label for="exchange">Börs</Form.Label>
                            <Form.Input id='exchange' type="text" disabled={this.state.loading} value={this.state.stock.exchange} placeholder="Industri" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group md={6}>
                            <Form.Label for="type">Typ</Form.Label>
                            <Form.Input id='type' type="text" disabled={this.state.loading} value={this.state.stock.type} placeholder="Industri" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{textAlign:'right'}}>
                        <Button style={{display:'inline'}}>OK</Button>
                    </Form.Row>
                    <Form.Row style={{textAlign:"right"}}>
                        <ButtonRow style={{textAlign:"right"}}>
                            <Button>OK</Button>
                        </ButtonRow>
                    </Form.Row>
                </Form>
                <ButtonRow style={{textAlign:"right"}}>
                    <Button>OK</Button>
                </ButtonRow>
            </Page>

        );
    }
}


render(<Sample/>, document.getElementById("app"));
