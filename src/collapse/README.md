



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
                <Button onClick={this.toggle}>Toggle</Button>
                <Collapse show={this.state.show} fade={true} timeout={1000}>
                    <Card margin={{top:1}} backgroundColor='warning' textColor='light'>
                        <Card.Header>
                            Header
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Primary card title
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Collapse>
            </div>
        );
    }
};

<Sample/>

```