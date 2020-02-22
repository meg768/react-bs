import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

import Toggler from './toggler';
import Brand from './brand';
import Collapse from './collapse';
import Nav from './nav';


export default function NavBar(props) {
	var {tag, children, color, className, ...props} = props;

	className = classNames('navbar navbar-expand-lg', className);
	className = classNames(color ? `navbar-${color}` : '', className);

	return (
		<Tag tag={tag} className={className} {...props}>
			{children}
		</Tag>
	);		

}

NavBar.propTypes = {
    /** Default tag */
	tag: PropTypes.string,
	/** Color */
    color: PropTypes.string
};

NavBar.defaultProps = {
    tag: 'nav'
};

NavBar.Toggler = Toggler;
NavBar.Brand = Brand;
NavBar.Collapse = Collapse;
NavBar.Nav = Nav;

