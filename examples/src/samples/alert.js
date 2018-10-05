import React, {Component} from 'react';
import {Alert} from '../../../src/index.js';


export default class Sample extends Component {



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
