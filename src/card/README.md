
### Usage

```js static
import {Card} from 'react-bootify';
/* or */
import Card from 'react-bootify/card';
```


### Simple Card
```js

<div>
    <Card>
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
</div>

```

### Cards with colors

```js
<div>
    <Container>
        <Container.Row>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} textColor='white' backgroundColor='primary'>
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
            </Container.Col>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} border='primary'>
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
            </Container.Col>
        </Container.Row>
    </Container>
</div>
```





```js
<div>
    <Container>
        <Container.Row>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} textColor='white' backgroundColor='secondary'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Secondary card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} border='secondary'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Secondary card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
        </Container.Row>
    </Container>
</div>
```


```js
<div>
    <Container>
        <Container.Row>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} textColor='white' backgroundColor='success'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Success card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} border='success'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Success card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
        </Container.Row>
    </Container>
</div>
```


```js
<div>
    <Container>
        <Container.Row>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} textColor='white' backgroundColor='danger'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Danger card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} border='danger'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Danger card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
        </Container.Row>
    </Container>
</div>
```



```js
<div>
    <Container>
        <Container.Row>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} textColor='white' backgroundColor='warning'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Warning card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} border='warning'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Warning card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
        </Container.Row>
    </Container>
</div>
```



```js
<div>
    <Container>
        <Container.Row>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} textColor='white' backgroundColor='info'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Info card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
            <Container.Col xs={12} sm={6}>
                <Card margin={{bottom:1}} border='info'>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Info card title
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container.Col>
        </Container.Row>
    </Container>
</div>
```