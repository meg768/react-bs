### Example

```js

import {Pill, Tag, Form, Input} from 'react-bootify';

class Sample extends React.Component {

    
    constructor() {
        this.state = {};
        this.state.value = 0;
    }

    onChange(event) {
        this.setState({value:event.target.value});
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Label>Normal switch</Form.Label>
                    <Input.Range onChange={this.onChange.bind(this)} value={this.state.value} min={0} max={100} step={10}/>
                </Form.Row>
                <Form.Row display='flex' justifyContent='center'>
                    <Pill color='primary' padding={{left:1, right:1}} style={{width:'3rem'}}>
                        {this.state.value}
                    </Pill>
                </Form.Row>
                <Form.Row>
                    <Form.Label>Read only switch</Form.Label>
                    <Input.Range readOnly value={50} min={0} max={100} step={10}/>
                </Form.Row>
                <Form.Row>
                    <Form.Label>Disabled switch</Form.Label>
                    <Input.Range readOnly disabled value={20} min={0} max={100} step={10}/>
                </Form.Row>
            </Form>

        );
    }
}

<Sample/>

```

