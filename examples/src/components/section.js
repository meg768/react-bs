import React from 'react';
import {Component, Container} from '../../../src/index.js';


export class Section extends Component {


    render() {
        var {style, title, ...props} = this.props;

        style = Object.assign({}, {marginTop:'4em'});

        return (
            <div style={style}>
                <h1>{title}</h1>
                {this.props.children}
            </div>

        );
    }
}
