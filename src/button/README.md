
#### Usage 

```js static
import {Button} from 'react-bootify';
/* or */
import Button from 'react-bootify/components/button';
```

#### Normal buttons

```js

var style = {margin:'0.2rem'};

function onClick() {
}

<div>
    <Button color='primary' style={style} onClick={onClick}>
        Primary
    </Button>

    <Button color='secondary' style={style}>
        Secondary
    </Button>

    <Button color='success' style={style}>
        Success
    </Button>

    <Button color='danger' style={style}>
        Danger
    </Button>

    <Button color='warning' style={style}>
        Warning
    </Button>

    <Button color='info' style={style}>
        Info
    </Button>

    <Button color='light' style={style}>
        Light
    </Button>

    <Button color='dark' style={style}>
        Dark
    </Button>

</div>

```

#### Large buttons

```js

var props = {style:{margin:'0.2rem'}};

function onClick() {
}
<div>
    <Button color='primary' size='lg' {...props}>
        Primary
    </Button>

    <Button color='secondary' size='lg' {...props}>
        Secondary
    </Button>

    <Button color='success' size='lg' {...props}>
        Success
    </Button>

    <Button color='danger' size='lg' {...props}>
        Danger
    </Button>

    <Button color='warning' size='lg' {...props}>
        Warning
    </Button>

    <Button color='info' size='lg' {...props}>
        Info
    </Button>

    <Button color='light' size='lg' {...props}>
        Light
    </Button>

    <Button color='dark' size='lg' {...props}>
        Dark
    </Button>

</div>

```



#### Outlined buttons 

```js

var props = {style:{margin:'0.2rem'}};

<div>
    <Button color='primary' outline {...props}>
        Primary
    </Button>

    <Button color='secondary' outline {...props}>
        Secondary
    </Button>

    <Button color='success' outline {...props}>
        Success
    </Button>

    <Button color='danger' outline {...props}>
        Danger
    </Button>

    <Button color='warning' outline {...props}>
        Warning
    </Button>

    <Button color='info' outline margin={{x:1}}>
        Info
    </Button>

    <Button color='light' outline margin={{x:1}}>
        Light
    </Button>

    <Button color='dark' outline margin={{x:1}}>
        Dark
    </Button>

</div>

```


