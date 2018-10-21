

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
                        {target}
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
    <Sample text='Labore' color='primary' placement='bottom'/>
    <Sample text='Aeque' color='info' outline placement='bottom-end'/>
    <Sample text='Atqui' color='warning' outline placement='bottom-start'/>
</div>
