import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';


/**
* @visibleName NavBar.Toggler
 */
export default function Component(props) {

	var {children, className, ...props} = props;

	className = classNames(className, {'navbar-toggler': true});

	return(
		<button className={className} type="button" data-toggle="collapse"  aria-expanded="false" aria-label="Toggle navigation" {...props}>
			{children || <span className="navbar-toggler-icon"></span>}
		</button>

	);
}
