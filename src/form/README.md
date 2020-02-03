### Usage 

```js static
import {Form} from 'react-bootify';
/* or */
import Form from 'react-bootify/components/form';
```


### Sample of Inline Form

```js

    <Form inline>
        <Form.Group>
            <Form.Label>
                Password
            </Form.Label>
            <Form.Input type="password" margin={{left:3, right:3}}/>
            <Tag tag='small' text='muted' id="passwordHelpInline">
                Must be 8-20 characters long.
            </Tag>
        </Form.Group>
    </Form>

```


```js


    <Form >
        <Form.Group row>
            <Form.Col width={{sm:2}} text='right'>
                <Form.Label inline ><small>Company name</small></Form.Label>
            </Form.Col>
            <Form.Col sm={10}>
                <Form.Input type="text"/>
            </Form.Col>
        </Form.Group>

        <Form.Group row>
            <Form.Col width={{sm:2}} text='right'>
                <Form.Label inline ><small>Bought at</small></Form.Label>
            </Form.Col>
            <Form.Col width={{sm:10}}>
                <Form.Input type="text"/>
            </Form.Col>
        </Form.Group>
    </Form>

```

```js


class Sample1 extends React.Component {


    constructor(props) {
        super(props);

        this.state = {};
        this.state.stock = {};
        this.state.loading = false;
    }

    onTextChange(event) {
        var stock = this.state.stock;
        stock[event.target.id] = event.target.value;
        this.setState({stock:stock});
    }

    onSourceChange(source) {
        var stock = this.state.stock;
        stock.source = source;
        this.setState({stock:stock});
    }

    onSaveChanges() {
        console.log(this.state.stock);
    }

    render() {
        return (

                <Form >
                    <Form.Group row>
                        <Form.Col width={{sm:2}} text='right' >
                            <Form.Label inline text='muted'>
                                <small>Ticker</small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col width={{sm:10}} text='right' >
                            <Form.Input type="text" id="ticker" placeholder="Ticker" onChange={this.onTextChange.bind(this)}/>
                        </Form.Col>
                    </Form.Group>

                    <Form.Group row>
                        <Form.Col width={{sm:2}} text='right' >
                            <Form.Label inline text='muted'>
                                <small>Company name</small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col width={{sm:10}}>
                            <Form.Input type="text" id="name" placeholder="Name" onChange={this.onTextChange.bind(this)}/>
                        </Form.Col>
                    </Form.Group>


                    <Form.Group row>
                        <Form.Col width={{sm:2}} text='right' >
                            <Form.Label inline text='muted'>
                                <small>Bought at</small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col width={{sm:10}}>
                            <Form.Input type="text" id="price" placeholder="Price" onChange={this.onTextChange.bind(this)}/>
                        </Form.Col>
                    </Form.Group>

                    <Form.Group row>
                        <Form.Col width={{sm:2}} text='right' >
                            <Form.Label inline text='muted'>
                                <small>
                                    Number of stocks
                                </small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col width={{sm:10}}>
                            <Form.Input type="text" id="amount" placeholder="Amount" onChange={this.onTextChange.bind(this)}/>
                        </Form.Col>
                    </Form.Group>

                    <Form.Group row>
                        <Form.Col width={{sm:2}} text='right' >
                            <Form.Label inline text='muted'>
                                <small>
                                    Source
                                </small>
                            </Form.Label>
                        </Form.Col>
                        <Form.Col width={{sm:10}}>
                            <Dropdown placement='bottom-start'>
                                <Dropdown.Target>
                                    <Button outline color='secondary'>
                                        {this.state.stock.source == undefined ? 'Select source' : this.state.stock.source}
                                    </Button>
                                </Dropdown.Target>
                                <Dropdown.Menu >
                                    <Dropdown.Item onClick={this.onSourceChange.bind(this, 'Twitter')}>
                                        Twitter
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={this.onSourceChange.bind(this, 'Facebook')}>
                                        Facebook
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={this.onSourceChange.bind(this, 'Pinterest')}>
                                        Pinterest
                                    </Dropdown.Item>
                                    <Dropdown.Separator/>
                                    <Dropdown.Item onClick={this.onSourceChange.bind(this, undefined)}>
                                        Reset
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Col>
                    </Form.Group>


                    <Form.Group row >
                        <Form.Col width={{sm:2}} text='right' padding={{y:0}}>
                            <Form.Label  inline text='muted'>
                                <small>Stop loss</small>
                            </Form.Label>
                        </Form.Col>

                        <Form.Col width={{sm:10}}>
                            <Form inline padding={{y:1}}>
                                <Form.Radio placeholder="Ticker" text='muted'>
                                    Continous stop loss
                                </Form.Radio>

                                <Form.Input style={{width:'5rem'}} margin={{left:2, right:2}} type="text" placeholder=""/>
                                <Form.Label text='muted'>%</Form.Label>
                            </Form>

                            <Form inline padding={{y:1}}>
                                <Form.Radio placeholder="" text='muted'>
                                    When price below
                                </Form.Radio>
                                <Form.Input style={{width:'5rem'}} margin={{left:2, right:2}} type="text" placeholder=""/>
                            </Form>
                            
                            <Form inline padding={{y:1}}>
                                <Form.Radio placeholder="Ticker" text='muted'>
                                    When price dropped with more than 
                                </Form.Radio>
                                <Form.Input style={{width:'5rem'}} margin={{left:2, right:2}} type="text" placeholder=""/>
                                <Form.Label text='muted'>%</Form.Label>
                            </Form>
                        </Form.Col>
                    </Form.Group>

                    <Form.Group text='right'>
                        <Button color='secondary' outline margin={{right:1}}>Cancel</Button>
                        <Button color='primary' margin={0} onClick={this.onSaveChanges.bind(this)} >Save changes</Button>
                    </Form.Group>
                </Form>
        );
    }
}


<Sample1/>
```



### Sample of Standard Form

```js


class Sample extends React.Component {


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
                    <Form.Row>
                        <Form.Col>
                            <Form.Group>
                                <Form.Label>Symbol</Form.Label>
                                <Form.Input type="text" readOnly id="symbol" value={this.state.stock.symbol} onChange={this.onChange}/>
                            </Form.Group>
                        </Form.Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Col>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Input type="text" disabled={this.state.loading} value={this.state.stock.name} placeholder="Name" onChange={this.onChange}/>
                            </Form.Group>
                        </Form.Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Col width={{md:6}}>
                            <Form.Group>
                                <Form.Label >Industry</Form.Label>
                                <Form.Input id='industry' type="text" disabled={this.state.loading} value={this.state.stock.industry} placeholder="Industry" onChange={this.onChange}/>
                            </Form.Group>
                        </Form.Col>
                        <Form.Col width={{md:6}}>
                            <Form.Group>
                                <Form.Label >Sector</Form.Label>
                                <Form.Input id='sector' type="text" disabled={this.state.loading} value={this.state.stock.sector} placeholder="Sector" onChange={this.onChange}/>
                            </Form.Group>
                        </Form.Col>
                    </Form.Row>

                    <Form.Row>
                        <Form.Col width={{md:6}}>
                            <Form.Group>
                                <Form.Label >Exchange</Form.Label>
                                <Form.Input id='exchange' type="text" disabled={this.state.loading} value={this.state.stock.exchange} placeholder="Industry" onChange={this.onChange}/>
                            </Form.Group>
                        </Form.Col>
                        <Form.Col width={{md:6}}>
                            <Form.Group>
                                <Form.Label >Type</Form.Label>
                                <Form.Input id='type' type="text" disabled={this.state.loading} value={this.state.stock.type} placeholder="Type" onChange={this.onChange}/>
                            </Form.Group>
                        </Form.Col>
                    </Form.Row>
                </Form>
        );
    }
}


<Sample/>
```


### Checkboxes


```js


class Sample extends React.Component {


    constructor(props) {
        super(props);

        this.state = {};
        this.state.text = 'Utiquus';
        this.state.option = 'A';
        this.state.checkBoxA = true;
        this.state.checkBoxB = true;

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {

        state = this.state;

        switch(event.target.id) {
            case 'checkBoxA': {
                state.checkBoxA = event.target.value;
                break
            }
            case 'checkBoxB': {
                console.log('checkBoxB', event.target.value);
                state.checkBoxB = event.target.value == 'on';
                break
            }
            case 'radioA': {
                state.option = event.target.value ? 'A' : undefined;
                break
            }
            case 'radioB': {
                state.option = event.target.value ? 'B' : undefined;
                break
            }
            default: {
                if (event.target.id) {
                    this.state[event.target.id] = event.target.value;
                }
            
            }
        }

        this.setState(state);
    }

    render() {

        return (
                <Form>
                    <Form.Row>
                        <Form.Col>
                            <Form.Label >Utiquus</Form.Label>
                            <Form.Input id='text' type="text" value={this.state.text} onChange={this.onChange}/>
                        </Form.Col>
                    </Form.Row>

                    <Form.Row >
                        <Form.Col padding={{top:3}} width={{xs:12, sm:12, md:8, lg:9, xl:9}}>
                            <Card>
                                <Card.Body>
                                    <Form.Radio id='radioA' checked={this.state.option=='A'} onChange={this.onChange}>
                                        Aenean porttitor
                                    </Form.Radio>
                                    <Form.Radio id='radioB' checked={this.state.option=='B'} onChange={this.onChange}>
                                        Interdum et malesuada fames
                                    </Form.Radio>
                                </Card.Body>
                            </Card>
                        </Form.Col>
                        <Form.Col padding={{top:3}} width={{xs:12, sm:12, md:4, lg:3, xl:3}}>
                            <Card>
                                <Card.Body>
                                    <Form.Checkbox id='checkBoxA' checked={this.state.checkBoxA} onChange={this.onChange}>
                                        Cras eget felis
                                    </Form.Checkbox>
                                    <Form.Checkbox id='checkBoxB' checked={this.state.checkBoxB} onChange={this.onChange}>
                                        Duis at viverra
                                    </Form.Checkbox>
                                </Card.Body>
                            </Card>
                        </Form.Col>
                    </Form.Row>


                </Form>
        );
    }
}


<Sample/>
```


### Switches


```js

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.show = false;
    }

    toggle() {
        console.log('Toggle');
        this.setState({show: !this.state.show});
        console.log(this.state.show);
    }


    render() {

        return (
            <Form>
                <Form.Row padding={2}>
                    <Form.Col>
                        <Form.Switch checked={this.state.show} onChange={this.toggle.bind(this)}>
                            <Tag text={this.state.show ? 'warning' : undefined}>
                                {this.state.show ? 'Warning displayed' : 'Display warning'}
                            </Tag>
                        </Form.Switch>
                    </Form.Col>
                </Form.Row>
                <Fade show={this.state.show}>
                    <Form.Row>
                        <Alert color='warning' dismiss={this.toggle.bind(this)}>
                            <Alert.Header>
                                Ei vim aeque
                            </Alert.Header>
                            <Alert.Separator/>
                            <Alert.Body>
                                In has iisque consequuntur, verear hendrerit no sea, per mandamus convenire evertitur et. Sensibus voluptatum ea has. Putant equidem scriptorem.
                            </Alert.Body>
                        </Alert>
                    </Form.Row>
                </Fade>
            </Form>
        );
    }
}

<Sample/>

```

```js

class Sample extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
                <Form>
                    <Form.Row>
                        <Form.Col padding={2} width={{xs:12, sm:12, md:6}}>
                            <Card padding={3}>
                                <Form.Col>
                                    <Form.Switch>Lorem ipsum dolor</Form.Switch>
                                    <Form.Switch>Nam molestie aliquam</Form.Switch>
                                </Form.Col>
                            </Card>
                        </Form.Col>

                        <Form.Col padding={2} width={{xs:12, sm:12, md:6}}>
                            <Card padding={3}>
                                <Form.Col>
                                    <Form.Switch>Morbi eu</Form.Switch>
                                    <Form.Switch>Pellentesque a</Form.Switch>
                                </Form.Col>
                            </Card>
                        </Form.Col>

                    </Form.Row>
                </Form>
        );
    }
}

<Sample/>

```