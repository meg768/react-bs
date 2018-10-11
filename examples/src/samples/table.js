import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Component, Table} from '../../../src/index.js';
import Page from '../components/page.js'

export default class Sample extends Component {


    constructor(props) {
        super(props);

        this.titles = [
            'Stock', 'Name', 'Industry'
        ];

        this.rows = [
            ['AAPL', 'Apple Compuler', 'Hardware'],
            ['TSLA', 'Tesla', 'Cars']
        ];
    }

    renderRow(row, rowNumber) {
        var columns = row.map((column, index) => {


            return (
                <Table.Col key={index}>
                    {column}
                </Table.Col>
            );
        });

        return (
            <Table.Row key={rowNumber}>
                {columns}
            </Table.Row>
        );


    }

    renderHeader() {

        var columns = this.titles.map((title, index) => {


            return (
                <Table.Col key={index} header>
                    {title}
                </Table.Col>
            );
        });

        return (
            <Table.Header>
                <Table.Row>
                    {columns}
                </Table.Row>

            </Table.Header>
        );


    }

    renderBody() {

        var rows = this.rows.map((row, index) => {
            return this.renderRow(row, index);
        });

        return (
            <Table.Body>
                {rows}
            </Table.Body>
        );
    }


    renderTable() {
        return (
            <Table hover={true} striped={true} bordered responsive>
                {this.renderHeader()}
                {this.renderBody()}
            </Table>            
        );
    }

    render() {


        return (
            <Page>
                <Page.Title>
                    Tables
                </Page.Title>

                <Page.Example>
                    {this.renderTable()}
                </Page.Example>

            </Page>
        );
    }
}
