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
        this.state.style = null;

        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }



    onEntering(node, isAppearing) {
        this.setState({style:{height:node.scrollHeight}});
    }

    onEntered(node, isAppearing) {
    }

    onExiting(node) {
        this.setState({style:{}});
    }

    onExited(node) {
    }
    
    render() {
        var {show, children, ...other} = this.props;

        return (
             <Transition in={show} timeout={this.props.timeout} onEntering={this.onEntering} onEntered={this.onEntered}  onExiting={this.onExiting} onExited={this.onExited}>                
                 {state => {
                    var child = React.Children.toArray(children);
     
                    if (isArray(child))
                        child = child[0];
     
                    var className = child.props.className;
                    var style = child.props.style || {};
                     
                    if (this.state.style != null) {
                        style = {...style, ...this.state.style};
                    }

                    console.log('style at', state, this.state.style);

                    className = classNames(className, {'collapse show' : state == 'entered'});
                    className = classNames(className, {'collapsing'    : state == 'entering'});
                    className = classNames(className, {'collapsing'    : state == 'exiting'});
                    className = classNames(className, {'collapse'      : state == 'exited'});

                    return React.cloneElement(child, {className: className, style: style, ...other});
                 }}
             </Transition>
        );     
    }
};

Collapse.propTypes = {
    show: PropTypes.bool,
    timeout: PropTypes.number
};

Collapse.defaultProps = {
    timeout: 350,
    show: false
};
