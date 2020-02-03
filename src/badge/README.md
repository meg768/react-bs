### Usage

```js static
import {Badge} from 'react-bootify';
/* or */ 
import Badge from 'react-bootify/components/badge';
```

### Example

```js

    class Sample extends React.Component {

        constructor(props) {
            super(props);
        }

        render() {
            var margin = {left:1, right:1};

            return (
                <Tag>
                    <Badge color="primary" margin={margin}>Primary</Badge>
                    <Badge color="secondary" margin={margin}>Secondary</Badge>
                    <Badge color="success" margin={margin}>Success</Badge>
                    <Badge color="danger" margin={margin}>Danger</Badge>
                    <Badge color="warning" margin={margin}>Warning</Badge>
                    <Badge color="info" margin={margin}>Info</Badge>
                    <Badge color="light" margin={margin}>Light</Badge>
                    <Badge color="dark" margin={margin}>Dark</Badge>
                </Tag>

            );

        }

    }

    <Sample/>
```

```js

<Tag>
    <h1>Example heading <Badge color="primary">New</Badge></h1>
    <h2>Example heading <Badge color="secondary">New</Badge></h2>
    <h3>Example heading <Badge color="success">New</Badge></h3>
    <h4>Example heading <Badge color="danger">New</Badge></h4>
    <h5>Example heading <Badge color="warning">New</Badge></h5>
    <h6>Example heading <Badge color="info">New</Badge></h6>
</Tag>
```
