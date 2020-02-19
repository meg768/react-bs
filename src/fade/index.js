import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
import {isArray} from '../utils';


export default function Fade(props)  {

   var {tag: Tag, show, children, timeout, ...props} = props;

   return (
        <Transition in={show} timeout={timeout}>                
            {state => {
                var child = React.Children.toArray(children);

                if (isArray(child))
                    child = child[0];

                var className = child.props.className;
                var style = Object.assign({}, child.props.style, {display:show ? 'block' : 'none'});
                
                className = classNames(className, {'fade': true});
                className = classNames(className, {'show': state == 'entered'});

                return React.cloneElement(child, {className:className, style:style, ...props});
            }}
        </Transition>
    );
};

Fade.propTypes = {
    tag     : PropTypes.string,
    show    : PropTypes.bool,
    timeout : PropTypes.number,
};

Fade.defaultProps = {
    tag     : 'div',
    timeout : 100,
    show    : false
};
