import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);

        var css = null;

        if (this.props.name) {
            console.log('Running theme', this.props.name);
            css = require('bootswatch/dist/' + this.props.name + '/bootstrap.min.css');
        }

        if (css == null) {
            console.log('Running theme bootstrap');
            css = require('bootstrap-css-only/css/bootstrap.min.css');
        }

    }

    render() {
        console.log('rendering theme')
        return this.props.children;
    }
}
