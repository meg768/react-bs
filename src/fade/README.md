
This component uses the built in animations in Bootstrap to show and hide 
components by using the **.fade** and **.show** class names. 


```js

class Sample extends React.Component  {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {};
        this.state.show = false;
    }

    toggle() {
        this.setState({show:!this.state.show});
    }

    render() {
        return (
            <Tag>
                <Button display='block' onClick={this.toggle}>Toggle</Button>
                <Tag tag='br'/>
                <Fade timeout={100} show={this.state.show}>                
                    <Alert dismiss={this.toggle}>
                        Pax vobiscum
                    </Alert>
                </Fade>
            </Tag>
        );
    }
};

<Sample/>

```