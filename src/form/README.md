### Sample of Inline Form

```js


class FormSampleOne extends React.Component {


    constructor(props) {
        super(props);

        this.state = {};
        this.state.stock = {};
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
                    <Form.Group row>
                        <Form.Col xs={1} sm={2} textAlign='right' >
                            <Form.Label inline textColor='muted'>
                                <small>Ticker</small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col xs={11} sm={10}>
                            <Form.Input type="text" id="name" placeholder="Ticker"/>
                        </Form.Col>
                    </Form.Group>

                    <Form.Group row>
                        <Form.Col sm={2} textAlign='right' >
                            <Form.Label inline textColor='muted'>
                                <small>Company name</small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col sm={10}>
                            <Form.Input type="text" id="name" placeholder="Name"/>
                        </Form.Col>
                    </Form.Group>


                    <Form.Group row>
                        <Form.Col sm={2} textAlign='right' >
                            <Form.Label inline textColor='muted'>
                                <small>Bought at</small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col sm={10}>
                            <Form.Input type="text" id="name" placeholder="Price"/>
                        </Form.Col>
                    </Form.Group>

                    <Form.Group row>
                        <Form.Col sm={2} textAlign='right' >
                            <Form.Label inline textColor='muted'>
                                <small>
                                    Number of stocks
                                </small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col sm={10}>
                            <Form.Input type="text" id="name" placeholder="Amount"/>
                        </Form.Col>
                    </Form.Group>


                    <Form.Group row>
                        <Form.Col sm={2} textAlign='right' >
                            <Form.Label  inline textColor='muted'>
                                <small>Stop lossXXX</small>
                            </Form.Label>
                        </Form.Col>

                        <Form.Col sm={10}>
                            <Form inline padding={{bottom:1, top:1}}>
                                <Form.Radio type="email" id="name" placeholder="Ticker">
                                    Dragging
                                </Form.Radio>

                                <Form.Input size='sm' margin={{left:2, right:2}} type="text" id="name" placeholder=""/>
                            </Form>

                            <Form inline  padding={{bottom:1, top:1}}>
                                <Form.Radio type="text" id="name" placeholder="">
                                    When price below
                                </Form.Radio>
                                <Form.Input size='sm' margin={{left:2, right:2}} type="text" id="name" placeholder=""/>
                            </Form>
                            
                            <Form inline padding={{bottom:1, top:1}}>
                                <Form.Radio type="email" id="name" placeholder="Ticker">
                                    When price dropped with 
                                </Form.Radio>
                                <Form.Input size='sm' margin={{left:2, right:2}} type="text" id="name" placeholder=""/>
                                <Form.Label>%</Form.Label>
                            </Form>
                        </Form.Col>
                    </Form.Group>

                    <Form.Group textAlign='right'>
                        <Button color='secondary' outline margin={{right:1}}>Cancel</Button>
                        <Button color='primary'  margin={0}>Save changes</Button>
                    </Form.Group>
                </Form>
        );
    }
}


<FormSampleOne/>
```



### Sample of Standard Form

```js


class FormSampleTwo extends React.Component {


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
                        <Form.Input type="text" readOnly plainText id="symbol" value={this.state.stock.symbol} onChange={this.onChange}/>
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


<FormSampleTwo/>
```


### Yet Another Sample



```js


class FormSampleThree extends React.Component {


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
                        <Form.Input type="text" readOnly plainText id="symbol" value={this.state.stock.symbol} onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label >Name</Form.Label>
                        <Form.Input id='name' type="text" disabled={this.state.loading} value={this.state.stock.name} placeholder="Name" onChange={this.onChange}/>
                    </Form.Group>

                </Form>
        );
    }
}


<FormSampleThree/>
```




### Checkboxes


```js


class FormSampleCheckboxes extends React.Component {


    constructor(props) {
        super(props);

        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        //var stock = this.state.stock;
        //stock[event.target.id] = event.target.value;
        //this.setState({stock:stock});
    }

    render() {
        var colStyle = {
            borderRadius: '0.3rem',
            border: '1px solid var(--gray)',
            background: 'var(--light)'
        };

        return (
                <Form>
                    <Form.Group>
                        <Form.Label >Symbol</Form.Label>
                        <Form.Input type="text" value={''} onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Group xs={12} sm={12} md={6}>
                                <div className='card'>
                                    <div className='card-body'>
                                    <Form.Radio checked onChange={this.onChange}>
                                        The <strong>quick</strong> brown fox jumps over the lazy dog
                                    </Form.Radio>
                                    <Form.Radio onChange={this.onChange}>
                                        The <strong>quick</strong> brown fox jumps over the lazy dog
                                    </Form.Radio>
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group  xs={12} sm={12} md={6}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <Form.Checkbox checked onChange={this.onChange}>
                                            The <strong>quick</strong> brown fox jumps over the lazy dog
                                        </Form.Checkbox>
                                        <Form.Checkbox onChange={this.onChange}>
                                            The <strong>quick</strong> brown fox jumps over the lazy dog
                                        </Form.Checkbox>
                                    </div>
                                </div>
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>


                </Form>
        );
    }
}


<FormSampleCheckboxes/>
```