

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
        var target = (
            <Button color={this.props.color} outline={this.props.outline} onClick={this.toggle}>
                {this.props.text}
            </Button>

        );
        return (
            <div className='mx-1 d-inline-block'>
                <Popover target={target} placement={this.props.placement} dismiss={this.toggle} isOpen={this.state.isOpen}>
                    <Popover.Header>
                        Eos modo
                    </Popover.Header>
                    <Popover.Body>
                        Te alii dicam fabulas mei. Quo graeco iuvaret scaevola no.
                    </Popover.Body>
                </Popover>
            </div>
        );

    }
}

<div>
    <Sample text='Labore' color='primary' placement='bottom'/>
    <Sample text='Aeque' color='info' outline placement='top-start'/>
    <Sample text='Atqui' color='warning' outline placement='bottom-start'/>
</div>
