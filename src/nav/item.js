import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * @visibleName Nav.Item
 */
export default function Component(props) {

	var {tag, children, className, disabled, ...props} = props;

	className = classNames(className, {'nav-item': true});
	className = classNames(className, {'disabled': disabled});

	return (
		<Tag tag={tag} className={className} {...props}>
			{children}
		</Tag>

	);
}

Component.propTypes = {
	tag: PropTypes.string,
	disabled: PropTypes.bool
};

Component.defaultProps = {
	tag: 'div',
	disabled: false
};
