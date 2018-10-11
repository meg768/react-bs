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


                <Page.Example title='General alerts'>
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

                <Page.Example title='Alert header'>
                    <Alert>
                        <Alert.Heading>
                            Alert header
                        </Alert.Heading>
                        <Alert.Separator/>
                        <Alert.Body>
                            Lorem ipsum dolor sit amet, possit commodo similique nam at. Exerci nonumy qualisque at per. Petentium explicari neglegentur id nec.
                        </Alert.Body>
                    </Alert>
                </Page.Example>

                <Page.Example title='Dismissable alert'>
                    <Alert color='warning' dismissable>
                        <Alert.Heading>
                            A dismissable alert header
                        </Alert.Heading>
                        <Alert.Separator/>
                        <Alert.Body>
                            Lorem ipsum dolor sit amet, falli libris causae ei eam, nec eu unum putant, natum prima maiestatis et vix ne.
                        </Alert.Body>
                    </Alert>
                </Page.Example>


            </Page>
        );
    }
}
