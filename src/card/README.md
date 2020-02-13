
### Usage

```js static
import {Card} from 'react-bootify';
/* or */
import Card from 'react-bootify/components/card';
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

import {Container} from 'react-bootify';

<div>
    <Container>
        <Container.Row>
            <Container.Col width={{xs:12, sm:6}}>
                <Card margin={{bottom:1}} text='white' bg='primary'>
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
            <Container.Col width={{xs:12, sm:6}}>
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

import {Container} from 'react-bootify';

<div>
    <Container>
        <Container.Row>
            <Container.Col width={{xs:12, sm:6}}>
                <Card margin={{bottom:1}} text='white' bg='secondary'>
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
            <Container.Col width={{xs:12, sm:6}}>
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

import {Container} from 'react-bootify';

<div>
    <Container>
        <Container.Row>
            <Container.Col width={{xs:12, sm:6}}>
                <Card margin={{bottom:1}} text='white' bg='success'>
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
            <Container.Col width={{xs:12, sm:6}}>
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

import {Container} from 'react-bootify';

<div>
    <Container>
        <Container.Row>
            <Container.Col width={{xs:12, sm:6}}>
                <Card margin={{bottom:1}} text='white' bg='danger'>
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
            <Container.Col width={{xs:12, sm:6}}>
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

import {Container} from 'react-bootify';

<div>
    <Container>
        <Container.Row>
            <Container.Col width={{xs:12, sm:6}}>
                <Card margin={{bottom:1}} text='white' bg='warning'>
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
            <Container.Col width={{xs:12, sm:6}}>
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

import {Container} from 'react-bootify';

<div>
    <Container>
        <Container.Row>
            <Container.Col width={{xs:12, sm:6}}>
                <Card margin={{bottom:1}} text='white' bg='info'>
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
            <Container.Col width={{xs:12, sm:6}}>
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
