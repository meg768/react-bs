### Example

```js

import {Form, Tag} from 'react-bootify';

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
                        <Form.Switch checked={this.state.checked} onChange={this.toggle.bind(this)}>
                            Enabled switch
                        </Form.Switch>
                    </Form.Col>
                    <Form.Col>
                        <Form.Switch disabled>
                            Disabled switch
                        </Form.Switch>
                    </Form.Col>
                </Form.Row>
            </Form>
        );
    }
}

<Sample/>

```
