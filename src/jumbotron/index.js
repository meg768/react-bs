import {React, PropTypes} from '../utils';
import Tag from '../tag';

export default function Jumbotron(props)  {
    var {tag, className, ...other} = props;
    return <Tag tag={tag} className={className} {...other}/>;
};

Jumbotron.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string
}

Jumbotron.defaultProps = {
    className: 'jumbotron',
    tag: 'div'
}

///////////////////////////////////////////////////////////////////////////////

Jumbotron.Header = function(props) {
    var {tag, ...other} = props;
    return <Tag tag={tag} {...other}/>;
}

Jumbotron.Header.defaultProps = {
    tag: 'h2'
}

///////////////////////////////////////////////////////////////////////////////

Jumbotron.Body = function(props) {
    var {tag, ...other} = props;
    return <Tag tag={tag} {...other}/>;
}

Jumbotron.Body.defaultProps = {
    tag: 'div'
}

