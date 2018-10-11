import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Component} from '../../../src/index.js';
import Page from '../components/page.js'

export default class Sample extends Component {


    render() {
        return (
            <Page>
                <Page.Title>
                    Alerts
                </Page.Title>


                <Page.Example>
                    <Alert color='primary'>
                        A simple primary alert—check it out!
                    </Alert>

                    <Alert color='secondary'>
                        A simple secondary alert—check it out!
                    </Alert>

                    <Alert color='success'>
                        A simple success alert—check it out!
                    </Alert>

                    <Alert color='danger'>
                        A simple primary alert—check it out!
                    </Alert>

                    <Alert color='warning'>
                        A simple warning alert—check it out!
                    </Alert>

                    <Alert color='info'>
                        A simple info alert—check it out!
                    </Alert>

                    <Alert color='light'>
                        A simple light alert—check it out!
                    </Alert>

                    <Alert color='dark'>
                        A simple dark alert—check it out!
                    </Alert>


                </Page.Example>

                <Page.Example>
                    <Alert>
                        <Alert.Heading>
                            sdfg
                        </Alert.Heading>
                        <Alert.Separator/>
                        <Alert.Body>
                            söadkf
                        </Alert.Body>
                    </Alert>
                </Page.Example>
            </Page>
        );
    }
}
