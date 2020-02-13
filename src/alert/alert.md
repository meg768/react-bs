
### Usage

```js static

import {Alert} from 'react-bootify';
/* or */
import Alert from 'react-bootify/components/alert';
```


### Simple alert


```js

import {Alert} from 'react-bootify';

<div>
    <Alert alert='primary'>
        No discere nostrum vix, vim.
    </Alert>

    <Alert alert='secondary'>
        Cum in mundi docendi, dicat.
    </Alert>

    <Alert alert='success'>
        Noster vocent epicurei cu est, te vix.
    </Alert>

    <Alert alert='danger'>
        Agam tempor necessitatibus id has, eu mel liber.
    </Alert>

    <Alert alert='warning'>
        Ne eam falli dictas officiis ius.
    </Alert>
 
    <Alert alert='info'>
        Cibo corpora dissentiet an vis, vel appetere.
    </Alert>

    <Alert alert='light'>
        Ea eum minimum.
    </Alert>

    <Alert alert='dark'>
        Id erat fastidii vis.
    </Alert>
</div>

 ```
### Dismissable alerts

By adding the **dismisable** property, a dismiss button will be added to the alert.

```js

import {Alert} from 'react-bootify';

<div>
    <Alert dismissable alert='warning'>
        Has cibo omittam percipitur an, no duo erat placerat oporteat.
    </Alert>
</div>
```

If the **dismisable** property is a function, it will be called when the dismiss 
button is clicked and it will not dismiss itself. It is up to the **dismiss** function.


### Alert with a body

```js

import {Alert} from 'react-bootify';

<div>
    <Alert alert='primary'>
        <Alert.Body>
            Vix an perfecto consequuntur, altera nostrum intellegam ex mel in.
        </Alert.Body>
    </Alert>
</div>

```


### Alert with header, body and separator

```js

import {Alert} from 'react-bootify';

<Alert alert='primary'>
    <Alert.Header>
        Ei vim aeque
    </Alert.Header>
    <Alert.Separator>
    </Alert.Separator>
    <Alert.Body>
        In has iisque consequuntur, verear hendrerit no sea, per mandamus convenire evertitur et. Sensibus voluptatum ea has. Putant equidem scriptorem.
    </Alert.Body>
</Alert>

 ```
