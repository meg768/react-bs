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
		var {src, innerTag, icon, ...props} = this.props;

		var svg = undefined;
		
		if (!svg && icon) {
			svg = require('bootstrap-icons/icons/' + icon + '.svg');
		}

		if (!svg && src) {
			svg = require(src);
		}

		var element = React.createElement(innerTag, {dangerouslySetInnerHTML: {__html:svg}});

		return (
			<Tag {...props}>
				{element}
			</Tag>
		);
	}
}
