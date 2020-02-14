
#### Usage 

```js static
import {Progress} from 'react-bootify';
/* or */
import Progress from 'react-bootify/components/progress';
```

#### Simple example


```js

import {Tag} from "react-bootify";

<Tag>
    <Tag padding={{y:1}}>
        <Progress>
            <Progress.Bar min={0} max={100} value={10}>
            </Progress.Bar>
        </Progress>
    </Tag>

    <Tag padding={{y:1}}>
        <Progress>
            <Progress.Bar striped bg='success' min={0} max={100} value={25}>
            </Progress.Bar>
        </Progress>
    </Tag>

    <Tag padding={{y:1}}>
        <Progress>
            <Progress.Bar bg='info' min={0} max={100} value={50}>
            </Progress.Bar>
        </Progress>
    </Tag>

    <Tag padding={{y:1}}>
        <Progress>
            <Progress.Bar striped bg='warning' min={0} max={100} value={75}>
            </Progress.Bar>
        </Progress>
    </Tag>

    <Tag padding={{y:1}}>
        <Progress >
            <Progress.Bar bg='danger' min={0} max={100}  value={95}>
                95%
            </Progress.Bar>
        </Progress>
    </Tag>

</Tag>

```


