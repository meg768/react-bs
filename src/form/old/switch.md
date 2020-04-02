### Example

```js

import {Form, Input, Tag} from 'react-bootify';

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.checked = false;
    }

    toggle() {
        this.setState({checked: !this.state.checked});
    }

    render() {

        return (
            <Form>
                <Form.Row padding={2}>
                    <Form.Col>
                        <Input.Switch checked={this.state.checked} onChange={this.toggle.bind(this)}>
                            Enabled switch
                        </Input.Switch>
                    </Form.Col>
                    <Form.Col>
                        <Input.Switch disabled>
                            Disabled switch
                        </Input.Switch>
                    </Form.Col>
                </Form.Row>
            </Form>
        );
    }
}

<Sample/>

```
