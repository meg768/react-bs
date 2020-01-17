
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
        <Container.Row>
            <Container.Col style={style}>One</Container.Col>
            <Container.Col style={style}>Two</Container.Col>
            <Container.Col style={style}>Three</Container.Col>
        </Container.Row>
        <Container.Row>
            <Container.Col style={style}>Four</Container.Col>
            <Container.Col style={style}>Five</Container.Col>
            <Container.Col style={style}>Six</Container.Col>
        </Container.Row>
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
        <Container.Row>
            <Container.Col style={style} md={8}>Width set to 8</Container.Col>
            <Container.Col style={style} md={2}>Width set to 2</Container.Col>
            <Container.Col style={style} md={2}>Width set to 2</Container.Col>
        </Container.Row>
        <Container.Row>
            <Container.Col style={style} md={{width:4, offset:4}}>Width set to 4 and offset by 4</Container.Col>
            <Container.Col style={style} md={4}>Width set to 4</Container.Col>
        </Container.Row>
    </Container>


```