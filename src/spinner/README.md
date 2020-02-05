


### Usage

```js static
import {Spinner} from 'react-bootify';
/* or */ 
import Spinner from 'react-bootify/components/spinner';
```

### Note

Requires Bootstrap version 4.2.1 or later.

### Examples

Basic example

```js
<Spinner/>
```

Two types of spinners are available: **border** (default) and **grow**.

```js
<Spinner type="grow" padding={1}/>
```

Since the spinner is based on the **Tag** element all the tag properties are available to
change text color, background color etc.

```js
<Spinner text="warning" bg="danger" padding={1}/>
```

To center a spinner within a **Tag**

```js

import {Tag} from 'react-bootify';

<Tag display='flex' alignItems='center' justifyContent='center' padding={1}>
    <Spinner text="info"/>
</Tag>
```

Different sizes

```js

import {Tag} from 'react-bootify';

<Tag display='flex' alignItems='center' justifyContent='center' padding={1}>
    <Spinner margin={{x:2}} text="primary" size="xs"/>
    <Spinner margin={{x:2}} text="secondary" size="sm"/>
    <Spinner margin={{x:2}} text="success" size="md"/>
    <Spinner margin={{x:2}} text="danger" size="lg"/>
    <Spinner margin={{x:2}} text="warning" size="xl"/>
</Tag>
```

