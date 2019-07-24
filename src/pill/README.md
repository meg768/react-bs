### Usage

```js static
import {Pill} from 'react-bootify';
/* or */ 
import Pill from 'react-bootify/pill';
```

### Example

```js

    var margin = {left:1, right:1};

    <Tag>
        <Pill color="primary" margin={margin}>Primary</Pill>
        <Pill color="secondary" margin={margin}>Secondary</Pill>
        <Pill color="success" margin={margin}>Success</Pill>
        <Pill color="danger" margin={margin}>Danger</Pill>
        <Pill color="warning" margin={margin}>Warning</Pill>
        <Pill color="info" margin={margin}>Info</Pill>
        <Pill color="light" margin={margin}>Light</Pill>
        <Pill color="dark" margin={margin}>Dark</Pill>
    </Tag>
```

```js

<Tag>
    <h1>Example heading <Pill color="primary">New</Pill></h1>
    <h2>Example heading <Pill color="secondary">New</Pill></h2>
    <h3>Example heading <Pill color="success">New</Pill></h3>
    <h4>Example heading <Pill color="danger">New</Pill></h4>
    <h5>Example heading <Pill color="warning">New</Pill></h5>
    <h6>Example heading <Pill color="info">New</Pill></h6>
</Tag>
```
