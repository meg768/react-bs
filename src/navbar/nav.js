import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
* @visibleName NavBar.Nav
 */

function Nav(props) {

	var {children, className, ...props} = props;

	className = classNames(className, {'navbar-nav': true});

	return (
		<Tag className={className} {...props}>
			{children}
		</Tag>

	);
}

export default Nav;
