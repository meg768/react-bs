import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Component} from '../../../src/index.js';
import Page from '../components/page.js'

export default class SampleX extends Component {


    render() {
        return (
            <div>

                <Alert color='primary'>
                    Primary alert
                </Alert>
                <Alert color='danger'>
                    Danger alert
                </Alert>
                <Alert color='warning'>
                    Warning alert
                </Alert>
                <Alert color='light'>
                    Light alert
                </Alert>
            </div>
        );
    }
}
