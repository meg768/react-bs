import Component from './component.js';

import onClickOutside from 'react-onclickoutside';


class ClickOutside extends Component {


    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    handleClickOutside() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }


    render() {
        return this.props.children;
    }
}

export default onClickOutside(ClickOutside);
