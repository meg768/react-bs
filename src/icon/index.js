import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from '../tag';

export default class Icon extends React.Component  {

	static defaultProps = {
		innerTag: 'i'
	};

	constructor(props) {
		super(props);
	}

	render() {
		var {innerTag, icon, ...props} = this.props;
		var svg = require('bootstrap-icons/icons/' + icon + '.svg');

		var element = React.createElement(innerTag, {dangerouslySetInnerHTML: {__html:svg}});

		return (
			<Tag {...props}>
				{element}
			</Tag>
		);
	}
}
