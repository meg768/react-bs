### Usage

```js static
import {Dropdown} from 'react-bootify';
/* or */
import Dropdown from 'react-bootify/dropdown';
```


### A simple down 




```js

class DropdownSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.isOpen = false;
        this.toggle = this.toggle.bind(this);

    }

    toggle(event) {
        console.log('toggle');
        this.setState({isOpen:!this.state.isOpen});
    }

    render() {
        return (
            <div>
                <Dropdown dismiss={this.toggle}  isOpen={this.state.isOpen} placement='bottom-start'>
                    /* Place your target here */
                    <Dropdown.Target >
                        <Button color='primary' onClick={this.toggle}>
                            Primary
                        </Button>
                    </Dropdown.Target>
                    <Dropdown.Menu >
                        <Dropdown.Item>
                            Go home
                        </Dropdown.Item>
                        <Dropdown.Separator/>
                        <Dropdown.Item>
                            Go back
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );

    }
}

<DropdownSample/>

```
