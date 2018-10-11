import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Component} from '../../../src/index.js';
import Page from '../components/page.js'


import HomeSample from '../samples/home.js';
import AlertSample from '../samples/alert.js';
import FormSample from '../samples/form.js';
import PopperSample from '../samples/popper.js';
import PopoverSample from '../samples/popover.js';
import DropdownSample from '../samples/dropdown.js';
import TableSample from '../samples/table.js';
import JumbotronSample from '../samples/jumbotron.js';

export default class Sample extends Component {


    render() {
        return (
            <Page>
                <AlertSample/>
                <FormSample/>
                <TableSample/>
                <JumbotronSample/>
            </Page>
        )
    }
}
