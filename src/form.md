

```js


class Sample extends Component {


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
        );
    }
}


<Sample/>
```







Another sample









```js


class Sample extends Component {


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
                <Form>
                    <Form.Group>
                        <Form.Label >Symbol</Form.Label>
                        <Form.Input type="text" readOnly plainText id="symbol" value={this.state.stock.symbol}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label >Name</Form.Label>
                        <Form.Input id='name' type="text" disabled={this.state.loading} value={this.state.stock.name} placeholder="Name" onChange={this.onChange}/>
                    </Form.Group>

                </Form>
        );
    }
}


<Sample/>
```