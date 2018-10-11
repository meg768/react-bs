import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Row, Col, Component} from '../../../src/index.js';

require('bootstrap-css-only/css/bootstrap.min.css');


class JsonDump extends React.Component {

    render() {
        return <pre>{JSON.stringify(this.props.children, null, 4)}</pre>
    }
}

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
        <h4>
            {props.children}
        </h4>
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
            <div>
                    {this.props.children}    
            </div>
        )
    }
}

