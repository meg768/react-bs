### Usage 

```js static
import {Input} from 'react-bootify';
/* or */
import Input from 'react-bootify/components/input';
```


### Example

```js

import {Form, Tag, Input} from 'react-bootify';

<Form inline>
    <Form.Group>
        <Form.Label>
            Password
        </Form.Label>
        <Input type="password" margin={{left:3, right:3}}/>
        <Tag tag='small' text='muted'>
            Must be 8-20 characters long.
        </Tag>
    </Form.Group>
</Form>

```