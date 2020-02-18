import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

import Link from './link';
import Item from './item';

export default function Nav(props) {


	var {tag, children, className, ...props} = props;

	className = classNames(className, {'nav': true});

	return (
		<Tag tag={tag} className={className} {...props}>
			{children}
		</Tag>

	);

			
}

Nav.propTypes = {
	tag: PropTypes.string
};

Nav.defaultProps = {
	tag: 'div'
};

Nav.Link = Link;
Nav.Item = Item;
