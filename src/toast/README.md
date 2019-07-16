


### Usage

```js static
import {Toast} from 'react-bootify';
/* or */ 
import Toast from 'react-bootify/toast';
```

### Note

Requires Bootstrap version 4.2.1 or later.

### Examples

Basic example

```js
    <Toast>
        <Toast.Header title="Pax vobiscum" subtitle="A few seconds ago"/>
        <Toast.Body>
            Eu his eius option accusata, an aperiri blandit ocurreret his, eam debet nemore salutatus ad.
        </Toast.Body>
    </Toast>
```


```js

class Sample extends React.Component  {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {};
        this.state.show = false;
    }

    toggle() {
        this.setState({show:!this.state.show});
    }

    render() {
        return (
            <div>
                <Button display="block" onClick={this.toggle}>Toggle toast</Button>
                <br/>
                <Fade show={this.state.show}>                
                    <Toast show={false}>
                        <Toast.Header title="Pax vobiscum" subtitle="A few seconds ago" dismiss={this.toggle}/>
                        <Toast.Body>
                            Eu his eius option accusata, an aperiri blandit ocurreret his, eam debet nemore salutatus ad.
                        </Toast.Body>
                    </Toast>
                </Fade>
            </div>
        );
    }
};

<Sample/>

```