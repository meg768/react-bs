
### Usage

```js static
import {Icon} from 'react-bootify';
/* or */
import Icon from 'react-bootify/components/icon';
```

### Example

This example assumes you have installed the Bootstrap icons (https://icons.getbootstrap.com).

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

```js 
var alarmFill = require("bootstrap-icons/icons/alarm-fill.svg");
var alarm = require("bootstrap-icons/icons/alarm.svg");
var calendar = require("bootstrap-icons/icons/calendar.svg");

<Tag>
    <Icon width='3em' height='3em' text='warning' icon={alarmFill}/>
    <Icon width='3em' height='3em' text='info' icon={alarm}/>
    <Icon width='3em' height='3em' text='dark' icon={calendar}/>
</Tag>
 ```

### Example with no icon specified

```js
<Tag>
    <Icon/>
</Tag>
 ```
