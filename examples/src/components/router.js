import React, {Component} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import HomeSample from '../samples/home.js';
import AlertSample from '../samples/alert.js';
import FormSample from '../samples/form.js';
import PopperSample from '../samples/popper.js';
import PopoverSample from '../samples/popover.js';
import DropdownSample from '../samples/dropdown.js';
import TableSample from '../samples/table.js';
import JumbotronSample from '../samples/jumbotron.js';

export default class Module extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomeSample} />
                    <Route path="/form" component={FormSample} />
                    <Route path="/popper" component={PopperSample} />
                    <Route path="/alert" component={AlertSample} />
                    <Route path="/popover" component={PopoverSample} />
                    <Route path="/dropdown" component={DropdownSample} />
                    <Route path="/table" component={TableSample} />
                    <Route path="/jumbotron" component={JumbotronSample} />
                </div>
            </Router>
        );
    }
}
