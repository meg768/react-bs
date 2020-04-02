### Example

```js

import {Form, Tag, Input} from 'react-bootify';

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

```js


import {Card, Form, Input} from 'react-bootify';

class Sample extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Form>
                <Form.Row group>
                    <Form.Col padding={2} width={{xs:12, sm:12, md:6}}>
                        <Card padding={3}>
                            <Form.Col>
                                <Input.Switch>Lorem ipsum dolor</Input.Switch>
                                <Input.Switch>Nam molestie aliquam</Input.Switch>
                            </Form.Col>
                        </Card>
                    </Form.Col>

                    <Form.Col padding={2} width={{xs:12, sm:12, md:6}}>
                        <Card padding={3}>
                            <Form.Col>
                                <Input.Switch>Morbi eu</Input.Switch>
                                <Input.Switch disabled>Pellentesque a</Input.Switch>
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
