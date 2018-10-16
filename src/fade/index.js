import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
import {isArray} from '../utils';

export default function Fade(props)  {

   var {tag: Tag, children, ...other} = props;

   return (
        <Transition in={props.in} timeout={0}>                
            {state => {
                var child = React.Children.toArray(children);

                if (isArray(child))
                    child = child[0];

                var className = child.props.className;
                    
                className = classNames(className, {'fade': true});
                className = classNames(className, {'show': state == 'entered'});

                return React.cloneElement(child, {className: className, ...other});
            }}
        </Transition>
    );
};

Fade.defaultProps = {
    tag: 'div'
};
