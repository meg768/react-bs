import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Component, Table} from '../../../src/index.js';
import Page from '../components/page.js'

export default class Sample extends Component {


    render() {
        return (
            <Page>
                <Table style={{background:'red'}}>
                    <Table.Body>
                        <Table.Row style={{background:'red'}}>
                            <Table.Col>
                                A
                            </Table.Col>
                            <Table.Col>
                                B
                            </Table.Col>
                            <Table.Col>
                                C
                            </Table.Col>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Page>
        );
    }
}
