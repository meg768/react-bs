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

    var {className, text, bg, flex, fontWeight, shadow, fixed, position, justifyContent, visible, invisible, alignItems, alignContent, float, align, rounded, margin, border, padding, ...props} = props;

    // Display
    var {d, display, ...props} = props;

    // Margins
    var {m, ml, mr, mt, mb, mx, my, ...props} = props;

    // Padding
    var {p, pl, pr, pt, pb, px, py, ...props} = props;

    function addClass(name, condition) {
        if (condition)
            className = classNames(className, name);
    }

    function addClasses(prefix, prop) {
        if (isString(prop)) {
            prop = prop.split(' ');
        }

        if (isArray(prop)) {
            prop.forEach((item) => {
                addClass(`${prefix}-${item}`, true);
            });
        }
        else if (isObject(prop)) {
            for (var propName in prop) {
                addClasses(`${prefix}-${propName}`, prop[propName]);
            }
        }
        else if (isBoolean(prop)) {
            addClass(`${prefix}`, prop);
        }
        else if (prop != undefined) {
            addClass(`${prefix}-${prop}`, prop);
        }
    }

    ///////////////////////////////////////////////////////////////////////

    if (padding != undefined) {
        if (isObject(padding)) {
            pb = padding.bottom;
            pl = padding.left;
            pr = padding.right;
            pt = padding.top;
            px = padding.x;
            py = padding.y;
        }
        else {
            p = padding;
        }    
    }
 
    ///////////////////////////////////////////////////////////////////////

    if (margin != undefined) {
        if (isObject(margin)) {
            mb = margin.bottom;
            ml = margin.left;
            mr = margin.right;
            mt = margin.top;
            mx = margin.x;
            my = margin.y;
        }
        else {
            m = margin;
        }
    
    }
    
    ///////////////////////////////////////////////////////////////////////


    addClasses('m', m);
    addClasses('mb', mb);
    addClasses('ml', ml);
    addClasses('mr', mr);
    addClasses('mt', mt);
    addClasses('mx', mx);
    addClasses('my', my);

    addClasses('p', p);
    addClasses('pb', pb);
    addClasses('pl', pl);
    addClasses('pr', pr);
    addClasses('pt', pt);
    addClasses('px', px);
    addClasses('py', py);

    addClasses('d', d);
    addClasses('d', display);

    addClass('border', border); /* ?! */ 
    addClasses('border', border);

    addClasses('align-content', alignContent);
    addClasses('align-items', alignItems);
    addClasses('align', align);
    addClasses('bg', bg);
    addClasses('fixed', fixed);
    addClasses('flex', flex);
    addClasses('float', float);
    addClasses('font-weight', fontWeight);
    addClasses('invisible', invisible);
    addClasses('justify-content', justifyContent);
    addClasses('position', position);
    addClasses('rounded', rounded);
    addClasses('shadow', shadow);
    addClasses('text', text);
    addClasses('visible', visible);

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