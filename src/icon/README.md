
### Usage

```js static
import {Icon} from 'react-bootify';
/* or */
import Icon from 'react-bootify/components/icon';
```

### Simple example

This example assumes you have installed the bootstrap icons (https://icons.getbootstrap.com).

```js static
npm install bootstrap-icons --save
```

Sorry, no live samples yet, but here is an example.

```js static
import {ReactComponent as alarmFill} from "bootstrap-icons/icons/alarm-fill.svg";
import {ReactComponent as alarm} from "bootstrap-icons/icons/alarm.svg";
import {ReactComponent as logo} from "./logo.svg";

<Tag>
    <Icon width='3em' height='3em' text='info' icon={alarm}/>
    <Icon width='3em' height='3em' text='warning' icon={alarmFill}/>
    <Icon width='3em' height='3em' text='primary' icon={logo}/>
</Tag>
 ```
