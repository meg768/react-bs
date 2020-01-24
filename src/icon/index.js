import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from '../tag';

export default class Icon extends React.Component  {

	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div {...this.props}></div>
        );
	}
}
