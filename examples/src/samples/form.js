import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Component} from '../../../src/index.js';
import Page from '../components/page.js'

var readme = require('./form.md');

const XX = 
`
# Title
## SUbtitle
`;

console.log('XXXXX', XX.length, XX);

class Markdown extends Component {


    constructor(props) {
        super(props);

        var Markdown = require('markdown-it');
        this.markdown = new Markdown(); 

        var children = this.props.children;
//        debugger;
    }

    render() {
        var children = this.props.children;
        console.log('child', this.props.children);
        console.log('html', this.markdown.render(this.props.children));
        return (
            <div dangerouslySetInnerHTML={{ __html: this.markdown.render(XX)}}></div>
        );

    }
}

function markdown(text) {
    var Markdown = require('markdown-it');
    var md = new Markdown(); 
    return (
        <div dangerouslySetInnerHTML={{ __html: text}}></div>
    );

}

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
            <Page>
 
                <Markdown> 
                `
                    # A
                    ## B
                `
                </Markdown>

                <Page.Title>
                    Forms
                </Page.Title>
                <Page.Example>
                <Form>
                    <Form.Group>
                        <Form.Label >Symbol</Form.Label>
                        <Form.Input type="text" readOnly plainText id="symbol" value={this.state.stock.symbol}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label >Name</Form.Label>
                        <Form.Input id='name' type="text" disabled={this.state.loading} value={this.state.stock.name} placeholder="Name" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group md={6}>
                            <Form.Label >Industry</Form.Label>
                            <Form.Input id='industry' type="text" disabled={this.state.loading} value={this.state.stock.industry} placeholder="Industry" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group md={6}>
                            <Form.Label >Sector</Form.Label>
                            <Form.Input id='sector' type="text" disabled={this.state.loading} value={this.state.stock.sector} placeholder="Sector" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group md={6}>
                            <Form.Label >Exchange</Form.Label>
                            <Form.Input id='exchange' type="text" disabled={this.state.loading} value={this.state.stock.exchange} placeholder="Industry" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group md={6}>
                            <Form.Label >Type</Form.Label>
                            <Form.Input id='type' type="text" disabled={this.state.loading} value={this.state.stock.type} placeholder="Type" onChange={this.onChange}/>
                        </Form.Group>
                    </Form.Row>
                </Form>

                </Page.Example>

            </Page>
        );
    }
}
