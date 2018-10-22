

### Popover


**React-bootify** realies only on CSS styles from Bootstrap. No jQuery code is used. However, to make
things happend on screen, like popups and modals, the popular library PopperJS is used (also used by reactstrap).



```js

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }



    render() {
        var target = (
            <Button color={this.props.color} outline={this.props.outline}>
                {this.props.text}
            </Button>

        );
        return (
            <Tag margin={{horizontal:1}} display='inline-block'>
                <Popover  placement={this.props.placement} >
                    <Popover.Target>
                        <Button color={this.props.color} outline={this.props.outline}>
                            {this.props.text}
                        </Button>
                    </Popover.Target>
                    <Popover.Header>
                        Eos modo
                    </Popover.Header>
                    <Popover.Body>
                        Te alii dicam fabulas mei. Quo graeco iuvaret scaevola no.
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


```js

class Sample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <Tag margin={{horizontal:1}} display='inline-block'>
                <Popover  placement={this.props.placement} >
                    <Popover.Target>
                        <Tag tag='span' textColor={this.props.color}>
                            {this.props.text}
                        </Tag>
                    </Popover.Target>
                    <Popover.Header>
                        Eos modo
                    </Popover.Header>
                    <Popover.Body>
                        Te alii dicam fabulas mei. Quo graeco iuvaret scaevola no.
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
