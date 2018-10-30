

### Popover


**React-bootify** realies only on CSS styles from Bootstrap. No jQuery code is used. However, to make
things happend on screen, like popups and modals, the popular library PopperJS is used (also used by reactstrap).



```js

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.isOpen = false;
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {

        return (
            <Tag margin={{horizontal:1}} display='inline-block'>
                <Popover isOpen={this.state.isOpen} placement={this.props.placement} toggle={this.toggle}>
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
                        <Tag textAlign='right'>
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
    <Sample text='Top' color='info' outline placement='top'/>
    <Sample text='Bottom' color='warning' outline placement='bottom'/>
    <Sample text='Right' color='danger' outline placement='right'/>
</div>
```

Popovers may also be used without an internal state and the popover will
display and hide itself. However, the popover may then not be toggled from
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
            <Tag margin={{horizontal:1}} display='inline-block'>
                <Popover  placement={this.props.placement} >
                    <Popover.Target>
                        <Tag tag='span' textColor={this.props.color} onClick={onClick.bind(this, this.props.text)}>
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
