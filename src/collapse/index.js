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
        this.state.height = null;
        this.state.opacity = 0;
        
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter(node) {
        this.setState({height:0, opactity:0});
        console.log('onEnter state');
    }



    
    onEntering(node, isAppearing) {
        this.setState({height:node.scrollHeight, opacity:1});
        console.log('onEntering');
    }

    onEntered(node, isAppearing) {
        console.log('onEntered');
    }

    onExit(node) {
        console.log('onExit');
    }

    onExiting(node) {
        // getting this variable triggers a reflow
        const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
        this.setState({height:0, opacity:0});
        console.log('onExiting');
    }

    onExited(node) {
        this.setState({height:null, opacity:0});
        console.log('onExited');
    }
    /*
    onEntering(node, isAppearing) {
        this.setState({style:{height:node.scrollHeight}});
    }

    onEntered(node, isAppearing) {
    }

    onExiting(node) {
        this.setState({style:{height:0}});
    }

    onExited(node) {
        this.setState({style:{}});
    }
*/
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
                    
//                    if (this.state.height != null) {
  //                      style = {...style, ...{height:this.state.height}};
    //                }
                    
                    switch (state) {
                        case 'entering': {                
                            //className = classNames(className, 'collapsing');                
                            style = {...style, ...{position:'ralative', overflow:'hidden'}};
                            style = {...style, ...{transition:`height ${timeout / 1000}s ease, opacity ${timeout / 1000}s ease`}};
                            style = {...style, ...{height:this.state.height, opacity:this.state.opacity}};
    
                            break;
                        };

                        case 'entered': {
                            //className = classNames(className, 'collapse show');                
                            break;
                        };
                        case 'exiting': {
                            //className = classNames(className, 'collapsing');                
                            style = {...style, ...{position:'ralative', overflow:'hidden'}};
                            style = {...style, ...{transition:`height ${timeout / 1000}s ease, opacity ${timeout / 1000}s ease`}};
                            style = {...style, ...{height:this.state.height, opacity:this.state.opacity}};
                            break;
                        };

                        case 'exited': {
                            //className = classNames(className, 'collapse');                
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
    timeout: 350,
    fade: false,
    show: false
};
