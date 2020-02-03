
### Usage

```js static
import {Container} from 'react-bootify';
/* or */
import Container from 'react-bootify/components/container';
```

### Plain Rows and Columns

```js

    var style = {};
    style.borderColor = 'rgba(0, 0, 0, 0.1)';
    style.borderWidth = '1px';
    style.borderStyle = 'solid';
    style.backgroundColor = 'var(--light)';

    <Container>
        <Row>
            <Col style={style}>One</Col>
            <Col style={style}>Two</Col>
            <Col style={style}>Three</Col>
        </Row>
        <Row>
            <Col style={style}>Four</Col>
            <Col style={style}>Five</Col>
            <Col style={style}>Six</Col>
        </Row>
    </Container>


```

### Column Offsets

```js

    var style = {};
    style.borderColor = 'rgba(0, 0, 0, 0.1)';
    style.borderWidth = '1px';
    style.borderStyle = 'solid';
    style.backgroundColor = 'var(--light)';

    <Container>
        <Row>
            <Col style={style} width={8}>Width set to 8</Col>
            <Col style={style} width={2}>Width set to 2</Col>
            <Col style={style} width={2}>Width set to 2</Col>
        </Row>
        <Row>
            <Col style={style} width={{md:4}} offset={{md:4}}>Width set to 4 and offset by 4</Col>
            <Col style={style} width={{md:4}}>Width set to 4</Col>
        </Row>
    </Container>


```