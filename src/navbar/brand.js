import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * @visibleName NavBar.Brand
 */

function Brand(props) {


	var {tag = 'a', children, className, ...props} = props;

	className = classNames(className, {'navbar-brand': true});

	return (
		<Tag tag={tag} className={className} {...props}>
			{children}
		</Tag>

	);

}

export default Brand;

