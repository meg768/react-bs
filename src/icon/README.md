### Usage

```js static
import {Icon} from 'react-bootify';
/* or */ 
import Icon from 'react-bootify/components/icon';
```

### Bootstrap Icons

Still experimental...

Check out current icons here https://icons.getbootstrap.com

```js
    var style = {};
    style.width = '2em';
    style.height = '2em';
    style.display = 'inline-block'; 


    <Tag display='inline'>
        <Icon icon='alarm-fill' text='warning' style={style}/>
        <Icon icon='alarm' text='info' style={style}/>
        <Icon icon='calendar' text='success' style={style}/>
        <Icon icon='heart' style={{...style, color:'red'}}/>
        <Icon icon='justify-left' style={{...style, color:'green'}}/>
        <Icon icon='chat' style={{...style}}/>
        <Icon icon='star' text='warning' style={{...style}}/>
    </Tag>

```

