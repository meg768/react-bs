import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
import {isArray} from '../utils';


export default class Collapse extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {};
        this.state = {};
        this.state.height = null;

        
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter(node) {
        var state = {};
        this.setState(state);
        console.log('onEnter state', state, node.scrollHeight);
    }


    onExit(node) {
        var state = {height:node.scrollHeight};
        this.setState(state);
        console.log('onExit state', state);
    }
    
    onEntering(node, isAppearing) {
        var state = {height:node.scrollHeight};
        this.setState(state);
        console.log('onEntering state', state);
    }

    onEntered(node, isAppearing) {
        var state = {height:null};
        this.setState(state);
        console.log('onEntered state', state);
    }

    onExiting(node) {
        // getting this variable triggers a reflow
        const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
        
        var state = {height:0};
        this.setState(state);

        console.log('onExiting state', state);
    }

    onExited(node) {
        var state = {height:null};
        this.setState(state);

        console.log('onExited state', state);
    }
    
    render() {
        var {show, fade, timeout, children, ...other} = this.props;

        return (
             <Transition in={show} timeout={timeout} onEnter={this.onEnter} onEntering={this.onEntering} onEntered={this.onEntered}  onExit={this.onExit} onExiting={this.onExiting} onExited={this.onExited} >                
                 {state => {
                    var child = React.Children.toArray(children);
     
                    if (isArray(child))
                        child = child[0];
     
                    var className = child.props.className;
                    var style = child.props.style || {};
                    
                    
                    switch (state) {
                        case 'entering': {
                            if (this.state.height) {
                                style = {...style, ...{transition:'height 0.35s ease, opacity 0.35s ease'}};
                                style = {...style, ...{height:this.state.height}};
    
                            }
                            break;
                        };
                        case 'entered': {
                            break;
                        };
                        case 'exiting': {
                            style = {...style, ...{transition:'height 0.35s ease, opacity 0.35s ease'}};
                            style = {...style, ...{height:0}};
                            break;
                        };
                        case 'exited': {
                            style = {...style, ...{display:'none'}};
                            break;
                        };
                    }
 
                    console.log('style at', state, style);

                    /*

                    className = classNames(className, {'collapse show' : state == 'entered'});
                    className = classNames(className, {'collapsing'    : state == 'entering'});
                    className = classNames(className, {'collapsing'    : state == 'exiting'});
                    className = classNames(className, {'collapse'      : state == 'exited'});
                    className = classNames(className, {'fade'          : (state == 'entering' || state == 'exiting') && this.props.fade});
                    */

                    return React.cloneElement(child, {className: className, style: style, ...other});
                 }}
             </Transition>
        );     
    }
};

Collapse.propTypes = {
    show: PropTypes.bool,
    fade: PropTypes.bool,
    timeout: PropTypes.number
};

Collapse.defaultProps = {
    timeout: 300,
    fade: false,
    show: false
};
