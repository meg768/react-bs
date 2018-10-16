import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

export default function Fade(props)  {

    var {tag: Tag, children, ...other} = props;

    return (
        <div>
            <Transition in={props.in} timeout={0}>                
            {state => {
                var className = '';

                className = classNames(className, {'fade': true});
                className = classNames(className, {'show': state == 'entered'});
                
                return (
                    <Tag  className={className} {...other}>
                        {children}
                    </Tag>                        
                );
            }}
            </Transition>
        </div>
    );
};

Fade.defaultProps = {
    tag: 'div'
};
