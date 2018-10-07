//import 'bootswatch/dist/materia/bootstrap.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router.js';
import Page from './components/page.js';

export default class App extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page>
                <Router/>
            </Page>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
