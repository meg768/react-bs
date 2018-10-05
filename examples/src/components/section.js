import React from 'react';
import {Component, Container} from '../../../src/index.js';


export class Section extends Component {


    render() {
        var {style, title, ...props} = this.props;

        style = Object.assign({}, {marginTop:'4em'});

        return (
            <div style={style}>
                <h3>{title}</h3>
                {this.props.children}
            </div>

        );
    }
}
