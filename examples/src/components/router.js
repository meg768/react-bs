import React, {Component} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import AlertSample from '../samples/alert.js';
import FormSample from '../samples/form.js';
import PopperSample from '../samples/popper.js';

export default class Module extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={AlertSample} />
                    <Route path="/form" component={FormSample} />
                    <Route path="/popper" component={PopperSample} />
                    <Route path="/alert" component={AlertSample} />
                </div>
            </Router>
        );
    }
}
/*

import AlertSample from '../samples/alert.js';
import FormSample from '../samples/form.js';
import PopperSample from '../samples/popper.js';

export default class Module extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={AlertSample} />
                    <Route path="/form" component={FormSample} />
                    <Route path="/alert" component={AlertSample} />
                    <Route path="/popper" component={PopperSample} />
                </div>
            </Router>
        );
    }
}
*/
