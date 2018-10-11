import React from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron, Component, Button} from '../../../src/index.js';
import Page from '../components/page.js'

export default class Sample extends Component {


    render() {
        return (
            <Page>
                <Page.Title>
                    Jumbotron
                </Page.Title>


                <Page.Example>
                    <Jumbotron>
                        <Jumbotron.Header>
                            Qualisque
                        </Jumbotron.Header>
                        <Jumbotron.Body>
                            <p>
                                Lorem ipsum dolor sit amet, iriure mnesarchum eos no. Et sea maiorum qualisque voluptatum, regione integre epicurei mel eu. Eu decore evertitur pertinacia eos, his an modo invidunt. Unum noster eum ad. Suas commune ea qui, mel detracto maluisset prodesset te, sit eu sensibus oportere. Ut nam vidit antiopam recteque.
                            </p>
                            <hr/>
                            <p>
                                Ex mei epicuri invidunt voluptatum, qui et omnesque eloquentiam, ad.
                            </p>
                            <p>
                                <Button color="primary">Learn More</Button>
                            </p>

                        </Jumbotron.Body>
                    </Jumbotron>
                </Page.Example>
            </Page>
        );
    }
}
