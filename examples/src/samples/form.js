import React from 'react';
import {Component, Container, Form, Button, ButtonRow} from '../../../src/index.js';


export default class Sample extends Component {


    constructor(props) {
        super(props);

        this.state = {};
        this.state.stock = {};
        this.state.stock.symbol   = 'AAPL';
        this.state.stock.name     = '';
        this.state.stock.industry = '';
        this.state.stock.exchange = '';
        this.state.stock.sector   = '';

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
            <div>

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
                            <Form.Label for="industry">Industry</Form.Label>
                            <Form.Input id='industry' type="text" disabled={this.state.loading} value={this.state.stock.industry} placeholder="Industry" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group md={6}>
                            <Form.Label for="sector">Sector</Form.Label>
                            <Form.Input id='sector' type="text" disabled={this.state.loading} value={this.state.stock.sector} placeholder="Sector" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group md={6}>
                            <Form.Label for="exchange">Exchange</Form.Label>
                            <Form.Input id='exchange' type="text" disabled={this.state.loading} value={this.state.stock.exchange} placeholder="Industry" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group md={6}>
                            <Form.Label for="type">Type</Form.Label>
                            <Form.Input id='type' type="text" disabled={this.state.loading} value={this.state.stock.type} placeholder="Type" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <ButtonRow style={{textAlign:"right"}}>
                    <Button>OK</Button>
                </ButtonRow>

            </div>
        );
    }
}
