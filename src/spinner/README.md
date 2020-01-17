


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
    <Spinner color="warning" backgroundColor="primary"/>
```

To center a spinner within a <Tag/>

```js
    <Tag display='flex' alignItems='center' justifyContent='center' padding={2}>
        <Spinner color="danger"/>
    </Tag>
```

Different sizes

```js

    <Tag display='flex' alignItems='center' justifyContent='center' padding={2}>
        <Spinner color="warning" size="xs"/>
        <Tag width='2rem'/>
        <Spinner color="warning" size="sm"/>
        <Tag width='2rem'/>
        <Spinner color="warning" size="md"/>
        <Tag width='2rem'/>
        <Spinner color="warning" size="lg"/>
        <Tag width='2rem'/>
        <Spinner color="warning" size="xl"/>
    </Tag>
```


A bit larger and thicker

```js
    <Tag display='flex' alignItems='center' justifyContent='center' height='10rem' padding={2}>
        <Spinner color="warning" size={5}/>
        <Tag width='2rem'/>
        <Spinner type="grow" color="info" size={5}/>
    </Tag>
```

