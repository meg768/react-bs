### Usage

```js static
import {Dropdown} from 'react-bootify';
/* or */
import Dropdown from 'react-bootify/components/dropdown';
```


### A simple down 




```js

class DropdownSample extends React.Component {

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

<DropdownSample/>

```
