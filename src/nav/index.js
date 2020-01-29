import {React, classNames} from '../utils';
import Tag from '../tag';

export default class Nav extends React.Component {


	constructor(props) {
		super(props);

	}

	render() {
		var {tag = 'div', children, className, ...props} = this.props;

		className = classNames(className, {'nav': true});

		return (
			<Tag tag={tag} className={className} {...props}>
				{children}
			</Tag>

		);

			
	}	
}

Nav.Item = class extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {tag = 'div', children, className, disabled, ...props} = this.props;

		className = classNames(className, {'nav-item': true});
		className = classNames(className, {'disabled': disabled});

		return (
			<Tag tag={tag} className={className} {...props}>
				{children}
			</Tag>

		);

	}
}


Nav.Link = class extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {tag = 'a', children, className, disabled, active, ...props} = this.props;

		className = classNames(className, {'nav-link': true});
		className = classNames(className, {'disabled': disabled});
		className = classNames(className, {'active': active});

		return (
			<Tag tag={tag} className={className} {...props}>
				{children}
			</Tag>

		);

	}
}

