import Transition from 'react-transition-group/Transition';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PopperJS from 'popper.js';


var _uniqueID = 100;



function isType(obj, type) {
	return Object.prototype.toString.call(obj) == '[object ' + type + ']';
};

function uniqueID() {
	return 'UI' + _uniqueID++;
};

function isBoolean(obj) {
	return typeof obj === 'boolean';
};

function isArray(obj) {
	return isType(obj, 'Array');
};

function isNumber(obj) {
	return isType(obj, 'Number');
};

function isString(obj) {
	return isType(obj, 'String');
};

function isDate(obj) {
	return isType(obj, 'Date') && !isNaN(obj.getTime());
};

function isObject(obj) {
	return obj !== null && isType(obj, 'Object');
};

function isFunction(obj) {
	return typeof obj === 'function';
};

function isInteger(n) {
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}


function transformProps(props) {

    var {className, text, bg, fontWeight, shadow, fixed, position, justifyContent, visible, invisible, display, alignItems, alignContent, float, align, rounded, margin, border, padding, ...props} = props;

    function addClass(name, condition) {
        if (condition)
            className = classNames(className, name);
    }

    // The text property may have several values
    if (isString(text))
        text = text.split(' ');

    ///////////////////////////////////////////////////////////////////////

    if (border != undefined) {
        addClass(`border`, true);

        if (isObject(border)) {
            addClass(`border-left`, border.left);
            addClass(`border-top`, border.top);
            addClass(`border-right`, border.right);
            addClass(`border-bottom`, border.bottom);
        }
        else {
            addClass(`border-${border}`, border);
        }
    
    }
    
    ///////////////////////////////////////////////////////////////////////

    if (padding != undefined) {
        if (isObject(padding)) {
            addClass(`pl-${padding.left}`, padding.left != undefined);
            addClass(`pt-${padding.top}`, padding.top != undefined);
            addClass(`pr-${padding.right}`, padding.right != undefined);
            addClass(`pb-${padding.bottom}`, padding.bottom != undefined);
            addClass(`px-${padding.x}`, padding.x != undefined);
            addClass(`py-${padding.y}`, padding.y != undefined);
        }
        else {
            addClass(`p-${padding}`, isString(padding) || isNumber(padding));
        }
    }
 
    ///////////////////////////////////////////////////////////////////////

    if (margin != undefined) {
        if (isObject(margin)) {
            addClass(`ml-${margin.left}`, margin.left);
            addClass(`mt-${margin.top}`, margin.top);
            addClass(`mr-${margin.right}`, margin.right);
            addClass(`mb-${margin.bottom}`, margin.bottom);
            addClass(`mx-${margin.x}`, margin.x);
            addClass(`my-${margin.y}`, margin.y);
        }
        else {
            addClass(`m-${margin}`, margin);
        }
    }
    
    ///////////////////////////////////////////////////////////////////////

    if (rounded != undefined) {
        if (isObject(rounded)) {
            addClass(`rounded-left`, rounded.left);
            addClass(`rounded-top`, rounded.top);
            addClass(`rounded-right`, rounded.right);
            addClass(`rounded-bottom`, rounded.bottom);
        }
        else if (isNumber(rounded) || isString(rounded)) {
            addClass(`rounded-${rounded}`, rounded);
        }
        else if (rounded) {
            addClass(`rounded`, true);

        }
    }

    ///////////////////////////////////////////////////////////////////////

    if (justifyContent != undefined) {
        if (isObject(justifyContent)) {
            addClass(`justify-content-sm-${justifyContent.sm}`, justifyContent.sm);
            addClass(`justify-content-md-${justifyContent.md}`, justifyContent.md);
            addClass(`justify-content-lg-${justifyContent.lg}`, justifyContent.lg);
            addClass(`justify-content-xl-${justifyContent.xl}`, justifyContent.xl);
    
        }
        else {
            addClass(`justify-content-${justifyContent}`, justifyContent);
        }
    }

    ///////////////////////////////////////////////////////////////////////

    addClass(`align-content-${alignContent}`, isString(alignContent));
    addClass(`bg-${bg}`, isString(bg));
    addClass(`d-${display}`, isString(display));
    addClass(`align-${align}`, isString(align));
    addClass(`position-${position}`, isString(position));
    addClass(`float-${float}`, isString(float));
    addClass(`fixed-${fixed}`, isString(fixed));
    addClass(`align-items-${alignItems}`, isString(alignItems));
    addClass(`rounded`, isBoolean(rounded) || isString(rounded));
    addClass(`visible`, visible);
    addClass(`invisible`, invisible);
    addClass(`shadow`, isBoolean(shadow));
    addClass(`shadow-${shadow}`, isString(shadow));
    addClass(`font-weight-${fontWeight}`, isString(fontWeight));

    ///////////////////////////////////////////////////////////////////////


    // Special case for text...

    if (isArray(text)) {
        text.forEach((item) => {
            addClass(`text-${item}`, isString(item));
        });
    }

    ///////////////////////////////////////////////////////////////////////

    return {className:className, ...props};
    
}


var keyCodes = {
  esc:   27,
  space: 32,
  enter: 13,
  tab:   9,
  up:    38,
  down:  40
};



export {
    keyCodes,
    React, ReactDOM, classNames, PropTypes, Transition, PopperJS,
    isDate, isArray, isBoolean, isFloat, uniqueID, isString, isObject, isNumber, isFunction,
    transformProps
}