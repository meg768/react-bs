//import 'bootswatch/dist/materia/bootstrap.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import React from 'react';
import {render} from 'react-dom';
import {Component, Container, Form, Button, ButtonRow} from '../../src';
import {Page} from './components/page.js';
import {Section} from './components/section.js';


import AlertSample from './samples/alert.js';
import FormSample from './samples/form.js';

class Sample extends Component {


    constructor(props) {
        super(props);
    }



    render() {

        return (
            <Page>
                <Section title='Alerts'>
                    <AlertSample/>
                </Section>
                <Section title='Forms'>
                    <FormSample/>
                </Section>

            </Page>


        );


    }
}


render(<Sample/>, document.getElementById("app"));
