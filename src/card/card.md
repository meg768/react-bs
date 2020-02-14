
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
        <Card.Header tag='h5'>
            Header
        </Card.Header>
        <Card.Body>
            <Card.Title tag='h6'>
                Title
            </Card.Title>
            <Card.Text tag='p'>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
</div>

```

### Cards with colors

```js

import {Container, Row, Col} from 'react-bootify';

var color = 'primary';

<Container>
    <Row>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} text='white' bg={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} border={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

```





```js
import {Container, Row, Col} from 'react-bootify';

var color = 'secondary';

<Container>
    <Row>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} text='white' bg={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} border={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>


```


```js
import {Container, Row, Col} from 'react-bootify';

var color = 'success';

<Container>
    <Row>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} text='white' bg={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} border={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>


```


```js
import {Container, Row, Col} from 'react-bootify';

var color = 'warning';

<Container>
    <Row>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} text='white' bg={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} border={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

```



```js
import {Container, Row, Col} from 'react-bootify';

var color = 'danger';

<Container>
    <Row>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} text='white' bg={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} border={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

```



```js
import {Container, Row, Col} from 'react-bootify';

var color = 'info';

<Container>
    <Row>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} text='white' bg={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col width={{xs:12, sm:6}}>
            <Card margin={{bottom:1}} border={color}>
                <Card.Header tag='h4' style={{textTransform:'capitalize'}}>
                    {color}
                </Card.Header>
                <Card.Body>
                    <Card.Title tag='h5'>
                        Title
                    </Card.Title>
                    <Card.Text tag='p'>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
```
