
### Usage

```js static

import {Alert} from 'react-bootify';
/* or */
import Alert from 'react-bootify/alert';
```

### Simple alert


```js

    <Alert color='primary'>
        No discere nostrum vix, vim.
    </Alert>

    <Alert color='secondary'>
        Cum in mundi docendi, dicat.
    </Alert>

    <Alert color='success'>
        Noster vocent epicurei cu est, te vix.
    </Alert>

    <Alert color='danger'>
        Agam tempor necessitatibus id has, eu mel liber.
    </Alert>

    <Alert color='warning'>
        Ne eam falli dictas officiis ius.
    </Alert>

    <Alert color='info'>
        Cibo corpora dissentiet an vis, vel appetere.
    </Alert>

    <Alert color='light'>
        Ea eum minimum.
    </Alert>

    <Alert color='dark'>
        Id erat fastidii vis.
    </Alert>


 ```
### Dismissable alerts

By adding the **dismiss** property, a dismiss button will be added to the alert.
```js
<div>
    <Alert dismiss color='warning'>
        Has cibo omittam percipitur an, no duo erat placerat oporteat.
    </Alert>
</div>
```

If the **dismiss** property is a function, it will be called when the dismiss 
button is clicked and it will not dismiss itself. It is up to the **dismiss** function.


### Alert with a body

```js

<div>
    <Alert color='primary'>
        <Alert.Body>
            Vix an perfecto consequuntur, altera nostrum intellegam ex mel in.
        </Alert.Body>
    </Alert>
</div>

```


### Alert with header, body and separator

```js

    <Alert color='primary'>
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
