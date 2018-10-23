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


    }

render() {
        var target = (
            <Button color='primary' >
                Primary
            </Button>
        );

        var goHome = () => {
            console.log('Go home');
        }
        return (
            <div>
                <Dropdown placement='bottom-start'>
                    <Dropdown.Target>
                        {target}
                    </Dropdown.Target>
                    <Dropdown.Menu >
                        <Dropdown.Item onClick={goHome}>
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
