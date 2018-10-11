import React from 'react';
import {Button, Component, Container} from '../../../src/index.js';
import Theme from './theme.js';

export default class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.theme = 'materia';

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        console.log('Changing to darkly');
        this.setState({theme:'darkly'});
    }
    render() {
        var style = {margin:'1em'};
        console.log('theme:', this.state.theme);
        return (
            <Theme name={this.state.theme}>
                <div style={style}>
                    <Container>
                        {this.props.children}
                    </Container>
                    <Button onClick={this.changeTheme}>
                        Change Theme
                    </Button>
                </div>
            </Theme>
        );
    }
}
