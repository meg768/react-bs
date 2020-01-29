



### Usage 

```js static
import {Popover} from 'react-bootify';
/* or */
import Popover from 'react-bootify/components/popover';
```

**React-bootify** realies only on CSS styles from Bootstrap. No jQuery code is used. However, to make
things happend on screen, like popups and modals, the popular library PopperJS is used (also used by reactstrap).



```js

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.show = false;
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({show: !this.state.show});
    }

    render() {

        return (
            <Tag margin={{x:1}} display='inline-block'>
                <Popover show={this.state.show} placement={this.props.placement} toggle={this.toggle}>
                    <Popover.Target>
                        <Button color={this.props.color} outline={this.props.outline} onClick={this.toggle} >
                            {this.props.text}
                        </Button>
                    </Popover.Target>
                    <Popover.Header>
                        Popover Header
                    </Popover.Header>
                    <Popover.Body>
                        <span>
                            Sed posuere consectetur est at lobortis. Aenean eu leo quam. 
                            Pellentesque ornare sem lacinia quam venenatis vestibulum.
                        </span>
                        <hr/>
                        <Tag text='right'>
                            <Button size='sm' onClick={this.toggle}>Dismiss</Button>
                        </Tag>
                    </Popover.Body>
                </Popover>
            </Tag>
        );

    }
}

<div>
    <Sample text='Left' color='primary' placement='left'/>
    <Sample text='Top' color='info'  placement='top'/>
    <Sample text='Bottom' color='warning'  placement='bottom'/>
    <Sample text='Right' color='danger'  placement='right'/>
</div>
```

Popovers may also be used without an internal state and the popover will
display and hide itself automatically. And the trigger does not have to be a button. It could be anything, like a **span**.
However, the popover may then not be toggled from
within the popover.

```js

class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        function onClick(text) {
            console.log('Clicked', text);
        }
        
        return (
            <Tag margin={{x:1}} display='inline-block'>
                <Popover placement={this.props.placement} >
                    <Popover.Target>
                        <Tag tag='span' text={this.props.color} onClick={onClick.bind(this, this.props.text)}>
                            {this.props.text}
                        </Tag>
                    </Popover.Target>
                    <Popover.Header>
                        Eos modo
                    </Popover.Header>
                    <Popover.Body>
                        Sed posuere consectetur est at lobortis. Aenean eu leo quam. 
                        Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    </Popover.Body>
                </Popover>
            </Tag>
        );

    }
}

<div>
    <Sample text='Left' color='primary' placement='left'/>
    <Sample text='Top' color='info' outline placement='top'/>
    <Sample text='Bottom' color='warning' outline placement='bottom'/>
    <Sample text='Right' color='dark' outline placement='right'/>
</div>

```

You may also make the popover **sticky**. This means you may only dismiss the popover 
by clicking one the same button that triggered the display of the popover.

```js

class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        function onClick(text) {
            console.log('Clicked', text);
        }
        
        return (
            <Tag margin={{x:1}} display='inline-block'>
                <Popover  sticky={true} placement={this.props.placement} >
                    <Popover.Target>
                        <Button color={this.props.color} outline={this.props.outline} onClick={this.toggle} >
                            {this.props.text}
                        </Button>
                    </Popover.Target>
                    <Popover.Header>
                        Eos modo
                    </Popover.Header>
                    <Popover.Body>
                        Sed posuere consectetur est at lobortis. Aenean eu leo quam. 
                        Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    </Popover.Body>
                </Popover>
            </Tag>
        );

    }
}

<div>
    <Sample text='Sticky Left' color='primary' outline placement='left'/>
    <Sample text='Sticky Top' color='info' outline placement='top'/>
    <Sample text='Sticky Bottom' color='warning' outline placement='bottom'/>
    <Sample text='Sticky Right' color='dark' outline placement='right'/>
</div>

```
