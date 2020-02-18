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
    color: PropTypes.string
};

NavBar.defaultProps = {
    tag: 'nav'
};

NavBar.Toggler = Toggler;
NavBar.Brand = Brand;
NavBar.Collapse = Collapse;
NavBar.Nav = Nav;


/*
export default class NavBar extends React.Component {

	constructor(props) {
		super(props);

	}
	
	render() {
			
	}	
}


NavBar.Toggler = class extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {

		var {children, className, ...props} = this.props;

		className = classNames(className, {'navbar-toggler': true});

		return(
			<button className={className} type="button" data-toggle="collapse"  aria-expanded="false" aria-label="Toggle navigation" {...props}>
				{children || <span className="navbar-toggler-icon"></span>}
			</button>

		);

	}
}

NavBar.Nav = class extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		var {children, className, ...props} = this.props;

		className = classNames(className, {'navbar-nav': true});

		return (
			<Tag className={className} {...props}>
				{children}
			</Tag>

		);

	}
}


NavBar.Collapse = class extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		var {children, show, className, ...props} = this.props;

		className = classNames(className, {'collapse navbar-collapse': true});
		className = classNames(className, {show:show});

		return (
			<Tag className={className} {...props}>
				{children}
			</Tag>

		);

	}
}


NavBar.Brand = class extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		var {tag = 'a', children, className, ...props} = this.props;

		className = classNames(className, {'navbar-brand': true});

		return (
			<Tag tag={tag} className={className} {...props}>
				{children}
			</Tag>

		);

	}
}


*/