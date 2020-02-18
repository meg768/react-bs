import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * @visibleName NavBar.Collapse
 */

function Collapse(props) {


	var {children, show, className, ...props} = props;

	className = classNames(className, {'collapse navbar-collapse': true});
	className = classNames(className, {show:show});

	return (
		<Tag className={className} {...props}>
			{children}
		</Tag>

	);
}

Collapse.propTypes = {
	show: PropTypes.bool
};

Collapse.defaultProps = {
	show: false
};

export default Collapse;