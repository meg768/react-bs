


### Usage

```js static
import {Spinner} from 'react-bootify';
/* or */ 
import Spinner from 'react-bootify/spinner';
```

### Examples

Basic example

```js
    <Spinner/>
```

Two types of spinners are available: **border** (default) and **grow**.

```js
    <Spinner type="grow"/>
```

Since the spinner is based on the <Tag/> element all the tag properties are available to
change text color, background color etc.

```js
    <Spinner textColor="warning" backgroundColor="primary"/>
```

To center a spinner within a <Tag/>

```js
    <Tag alignItems='center' justifyContent='center' padding={2}>
        <Spinner textColor="danger"/>
    </Tag>
```

