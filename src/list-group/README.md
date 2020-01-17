

### Usage

```js static
import {ListGroup} from 'react-bootify';
/* or */
import ListGroup from 'react-bootify/components/list-group';
```

### Basic example
The most basic list group is an unordered list with list items. Build upon it with the options that follow, or with your own CSS as needed.

```js

<ListGroup>
    <ListGroup.Item>
        Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item>
        Dapibus ac facilisis in
    </ListGroup.Item>
    <ListGroup.Item>
        Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item>
        Porta ac consectetur ac
    </ListGroup.Item>
    <ListGroup.Item>
        Vestibulum at eros
    </ListGroup.Item>
</ListGroup>

```

### Active items
Add **active** to a **ListGroup.Item** to indicate the current active selection.

```js

<ListGroup>
    <ListGroup.Item active>
        Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item>
        Dapibus ac facilisis in
    </ListGroup.Item>
    <ListGroup.Item>
        Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item>
        Porta ac consectetur ac
    </ListGroup.Item>
    <ListGroup.Item>
        Vestibulum at eros
    </ListGroup.Item>
</ListGroup>

```
### Disabled items
Add **disabled** to a list group item to make it appear disabled. 

```js

<ListGroup>
    <ListGroup.Item disabled>
        Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item>
        Dapibus ac facilisis in
    </ListGroup.Item>
    <ListGroup.Item>
        Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item>
        Porta ac consectetur ac
    </ListGroup.Item>
    <ListGroup.Item>
        Vestibulum at eros
    </ListGroup.Item>
</ListGroup>

```

### Action items
Use **action** to create actionable list group items with hover, disabled, and active states.



```js

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.index = 0;

    }

    select(index) {
        this.setState({index:index});
    }


    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroup.Item action active={this.state.index == 0} onClick={this.select.bind(this, 0)}>
                        Cras justo odio
                    </ListGroup.Item>
                    <ListGroup.Item action active={this.state.index == 1} onClick={this.select.bind(this, 1)}>
                        Dapibus ac facilisis in
                    </ListGroup.Item>
                    <ListGroup.Item action active={this.state.index == 2} onClick={this.select.bind(this, 2)}>
                        Morbi leo risus
                    </ListGroup.Item>
                    <ListGroup.Item action active={this.state.index == 3} onClick={this.select.bind(this, 3)}>
                        Porta ac consectetur ac
                    </ListGroup.Item>
                    <ListGroup.Item action active={this.state.index == 4} onClick={this.select.bind(this, 4)}>
                        Vestibulum at eros
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );

    }
}

<Sample/>
```



### Flush
Add **flush** to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

```js
<ListGroup flush>
    <ListGroup.Item>
        Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item>
        Dapibus ac facilisis in
    </ListGroup.Item>
    <ListGroup.Item>
        Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item>
        Porta ac consectetur ac
    </ListGroup.Item>
    <ListGroup.Item>
        Vestibulum at eros
    </ListGroup.Item>
</ListGroup>
```

### Contextual Items
Use the **color** property to style list items with a stateful background and color.

```js
<ListGroup>
    <ListGroup.Item color='primary'>
        Primary - Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item color='secondary'>
        Secondary - Dapibus ac facilisis in
    </ListGroup.Item>
    <ListGroup.Item color='success'>
        Success - Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item color='danger'>
        Danger - Porta ac consectetur ac
    </ListGroup.Item>
    <ListGroup.Item color='warning'>
        Warning - Vestibulum at eros
    </ListGroup.Item>
    <ListGroup.Item color='info'>
        Info - Sit rebum causae.
    </ListGroup.Item>
    <ListGroup.Item color='light'>
        Light - At sale dicat
    </ListGroup.Item>
    <ListGroup.Item color='dark'>
        Dark - Ad eius prompta
    </ListGroup.Item>
</ListGroup>
```

