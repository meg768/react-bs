
### Usage

```js static

import {Nav} from 'react-bootify';
/* or */
import Nav from 'react-bootify/components/nav';
```

### Simple example


```js

    <Nav>
        <Nav.Item>
            <Nav.Link active href="#">
                Active
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#">
                Link
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#">
                Link
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link disabled href="#">
                Disabled
            </Nav.Link>
        </Nav.Item>
    </Nav>


 ```


### Simple example without Nav.Item


```js

    <Nav>
        <Nav.Link active href="#">
            Active
        </Nav.Link>
        <Nav.Link href="#">
            Link
        </Nav.Link>
        <Nav.Link href="#">
            Link
        </Nav.Link>
        <Nav.Link disabled href="#">
            Disabled
        </Nav.Link>
    </Nav>


 ```

### Bootstrap Documentation

See https://getbootstrap.com/docs/4.4/components/navs
