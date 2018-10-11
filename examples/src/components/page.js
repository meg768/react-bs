import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Row, Col, Component} from '../../../src/index.js';





export default class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.theme = 'materia';

    }

    render() {
        var style = {margin:'1em'};
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

Page.Title = function(props) {
    return (
        <h2>
            {props.children}
        </h2>
    );
}


Page.Example = class extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
      }


    render() {
        var style = {
            border: '0.1rem solid rgba(0, 0, 0, 0.1)',
            borderRadius: '0.2rem',
            padding:'2rem'
        };
    
        return (
            <div style={{margin: '1rem'}}>
                <h4>
                    {this.props.title}
                </h4>
                <div style={style}>
                    {this.props.children}    

                </div>
            </div>
        )
    }
}

