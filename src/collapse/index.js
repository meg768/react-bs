import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

import {isArray} from '../utils';


function debug() {
   //console.log.apply(null, arguments);
}


export default class Collapse extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {};
        this.state.height = null;
        this.state.opacity = null;
        
        this.onEntering = this.onEntering.bind(this);
        this.onEntered  = this.onEntered.bind(this);
        this.onExiting  = this.onExiting.bind(this);
        this.onExited   = this.onExited.bind(this);
        this.onExit     = this.onExit.bind(this);
        this.onEnter    = this.onEnter.bind(this);
    }

    onEnter(node) {
        debug('onEnter state');
        this.setState({height:0, opacity:0});
    }

    onEntering(node, isAppearing) {
        debug('onEntering');
        this.setState({height:node.scrollHeight, opacity:1});
    }

    onEntered(node, isAppearing) {
        debug('onEntered');
    }

    onExit(node) {
        debug('onExit');
    }

    onExiting(node) {
        debug('onExiting');

        // Getting this variable triggers a reflow
        const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

        this.setState({height:0, opacity:0});
    }

    onExited(node) {
        debug('onExited');
        this.setState({height:null, opacity:null});
    }


    collapsingStyle(style) {
        style = {...style, ...{position:'ralative', overflow:'hidden'}};

        if (this.props.fade) {
            style = {...style, ...{transition:`height ${timeout / 1000}s ease, opacity ${timeout / 1000}s ease`}};
            style = {...style, ...{height:this.state.height, opacity:this.state.opacity}};
        }
        else {
            style = {...style, ...{transition:`height ${timeout / 1000}s ease`}};
            style = {...style, ...{height:this.state.height}};
        }

        return style;
    }



    
    render() {
        var {show, fade, timeout, children, ...other} = this.props;

        var collapsingStyle = () => {
            var style = {};
            style = {...style, ...{position:'ralative', overflow:'hidden'}};
    
            if (this.props.fade) {
                style = {...style, ...{transition:`height ${timeout / 1000}s ease, opacity ${timeout / 1000}s ease`}};
                style = {...style, ...{height:this.state.height, opacity:this.state.opacity}};
            }
            else {
                style = {...style, ...{transition:`height ${timeout / 1000}s ease`}};
                style = {...style, ...{height:this.state.height}};
            }
    
            return style;
        }
    
        return (
             <Transition in={show} timeout={timeout} onEnter={this.onEnter} onEntering={this.onEntering} onEntered={this.onEntered}  onExit={this.onExit} onExiting={this.onExiting} onExited={this.onExited} >                
                 {state => {
                    var child = React.Children.toArray(children);
     
                    if (isArray(child))
                        child = child[0];
     
                    var style = child.props.style || {};

                    switch (state) {
                        case 'entering': {                
                            style = {...style, ...collapsingStyle()};
                            break;
                        };

                        case 'entered': {
                            break;
                        };

                        case 'exiting': {
                            style = {...style, ...collapsingStyle()};
                            break;
                        };

                        case 'exited': {
                            style = {...style, ...{display:'none'}};
                            break;
                        };
                    }
 
                    debug('Style for state', state, style);

                    return React.cloneElement(child, {style: style, ...other});
                 }}
             </Transition>
        );     
    }
};

Collapse.propTypes = {
    show    : PropTypes.bool,
    fade    : PropTypes.bool,
    timeout : PropTypes.number
};

Collapse.defaultProps = {
    timeout : 350,
    fade    : false,
    show    : false
};
