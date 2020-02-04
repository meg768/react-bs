


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
<Spinner type="grow"/>
```

Since the spinner is based on the <Tag/> element all the tag properties are available to
change text color, background color etc.

```js
<Spinner text="warning" bg="primary"/>
```

To center a spinner within a <Tag/>

```js

import {Tag} from 'react-bootify';

<Tag display='flex' alignItems='center' justifyContent='center' padding={2}>
    <Spinner color="danger"/>
</Tag>
```

Different sizes

```js

import {Tag} from 'react-bootify';

<Tag display='flex' alignItems='center' justifyContent='center' padding={2}>
    <Spinner text="warning" size="xs"/>
    <Tag style={{width:'2rem'}}/>
    <Spinner text="warning" size="sm"/>
    <Tag style={{width:'2rem'}}/>
    <Spinner text="warning" size="md"/>
    <Tag style={{width:'2rem'}}/>
    <Spinner text="warning" size="lg"/>
    <Tag style={{width:'2rem'}}/>
    <Spinner text="warning" size="xl"/>
</Tag>
```


A bit larger and thicker

```js
import {Tag} from 'react-bootify';

<Tag display='flex' alignItems='center' justifyContent='center' style={{height:'10rem'}} padding={2}>
    <Spinner text="warning" size={5}/>
    <Tag style={{width:'2rem'}}/>
    <Spinner type="grow" text="info" size={5}/>
</Tag>
```

