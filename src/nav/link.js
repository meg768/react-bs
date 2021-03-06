import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';


/**
 * @visibleName Nav.Link
 */


 class Link extends React.Component {

	static propTypes = {
		tag: PropTypes.string,
		active: PropTypes.bool,
		disabled: PropTypes.bool
	
	};

	static defaultProps = {
		tag: 'a',
		active: false,
		disabled: false
	
	};

	render() {

		var {tag, children, className, disabled, active, ...props} = this.props;

		className = classNames(className, {'nav-link': true});
		className = classNames(className, {'disabled': disabled});
		className = classNames(className, {'active': active});
	
		return (
			<Tag tag={tag} className={className} {...props}>
				{children}
			</Tag>
	
		);
	
	}
};

/*
export default function Component(props) {

	var {tag, children, className, disabled, active, ...props} = props;

	className = classNames(className, {'nav-link': true});
	className = classNames(className, {'disabled': disabled});
	className = classNames(className, {'active': active});

	return (
		<Tag tag={tag} className={className} {...props}>
			{children}
		</Tag>

	);

}
*/
/*
Link.propTypes = {
	tag: PropTypes.string,
	active: PropTypes.bool,
	disabled: PropTypes.bool
};

Link.defaultProps = {
	tag: 'a',
	active: false,
	disabled: false
};
*/
/*

export default function Component(props) {

	var {tag, children, className, disabled, active, ...props} = props;

	className = classNames(className, {'nav-link': true});
	className = classNames(className, {'disabled': disabled});
	className = classNames(className, {'active': active});

	return (
		<Tag tag={tag} className={className} {...props}>
			{children}
		</Tag>

	);

}

Component.propTypes = {
	tag: PropTypes.string,
	active: PropTypes.bool,
	disabled: PropTypes.bool
};

Component.defaultProps = {
	tag: 'a',
	active: false,
	disabled: false
};

*/

export default Link;