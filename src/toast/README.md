


### Usage

```js static
import {Toast} from 'react-bootify';
/* or */ 
import Toast from 'react-bootify/toast';
```

### Note

Requires Bootstrap version 4.2.1 or later.

### Example


#### Basic example

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
                <Toast show={this.state.show} margin={{top:2}}>
                    <Toast.Header title="Pax vobiscum" subtitle="A few seconds ago" dismiss={this.toggle}/>
                    <Toast.Body>
                        Eu his eius option accusata, an aperiri blandit ocurreret his, eam debet nemore salutatus ad.
                    </Toast.Body>
                </Toast>
            </div>
        );
    }
};

<Sample/>

```

#### Placement top right

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
            <Tag>
                <Button display="block" onClick={this.toggle}>Toggle toast upper right corner</Button>
                <Tag display="flex" position="fixed" fixed="top" padding={2} justifyContent="end">
                    <Toast show={this.state.show}>
                        <Toast.Header title="Pax vobiscum" subtitle="A few seconds ago" dismiss={this.toggle}/>
                        <Toast.Body>
                            Eu his eius option accusata, an aperiri blandit ocurreret his, eam debet nemore salutatus ad.
                        </Toast.Body>
                    </Toast>
                </Tag>
            </Tag>
        );
    }
};

<Sample/>

```

