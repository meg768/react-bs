### Usage

```js static
import {Dropdown} from 'react-bootify';
/* or */
import Dropdown from 'react-bootify/components/dropdown';
```


### A simple down 



```js

import {Form, Button} from 'react-bootify';

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.text = '';
    }

    setText(text) {
        this.setState({text:text});
    }

    render() {
        return (
            <Form padding={{x:2}}>
                <Form.Group row>
                    <Dropdown placement='bottom-start'>
                        <Dropdown.Target>
                            <Button outline color='primary'>
                                Primary
                            </Button>
                        </Dropdown.Target>
                        <Dropdown.Menu >
                            <Dropdown.Item onClick={this.setText.bind(this, 'Gone home.')}>
                                Go home
                            </Dropdown.Item>
                            <Dropdown.Item onClick={this.setText.bind(this, 'Went back.')}>
                                Go back
                            </Dropdown.Item>
                            <Dropdown.Separator/>
                            <Dropdown.Item onClick={this.setText.bind(this, '')}>
                                Never mind
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label float='right' text='muted' margin={{left:2}} inline>
                        {this.state.text}
                    </Form.Label>

                </Form.Group>
            </Form>
        );

    }
}

<Sample/>

```


```js

import {Tag, Form, Button, Icon} from 'react-bootify';

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.text = '';
    }

    setText(text) {
        this.setState({text:text});
    }

    render() {

        return (
            <Form padding={{x:2}}>
                <Form.Group row>
                    <Dropdown placement='bottom-start'>
                        <Dropdown.Target>
                            <Button outline color='primary'>
                                <Tag display='inline'>
                                    Primary
                                </Tag>
                                <Icon src={require('bootstrap-icons/icons/chevron-down.svg')} margin={{left:2}} width='1em' height='1em' />
                            </Button>
                        </Dropdown.Target>
                        <Dropdown.Menu >
                            <Dropdown.Item onClick={this.setText.bind(this, 'Gone home.')}>
                                Go home
                            </Dropdown.Item>
                            <Dropdown.Item onClick={this.setText.bind(this, 'Went back.')}>
                                Go back
                            </Dropdown.Item>
                            <Dropdown.Separator/>
                            <Dropdown.Item onClick={this.setText.bind(this, '')}>
                                Never mind
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label float='right' text='muted' margin={{left:2}} inline>
                        {this.state.text}
                    </Form.Label>

                </Form.Group>
            </Form>
        );

    }
}

<Sample/>

```
