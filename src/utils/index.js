var React = require('react');
var _uniqueID = 100;

var classNames = module.exports.classNames = require('classnames');

var isType = module.exports.isType = function(obj, type) {
	return Object.prototype.toString.call(obj) == '[object ' + type + ']';
};

var uniqueID = module.exports.uniqueID = function() {
	return 'UI' + _uniqueID++;
};

var isBoolean = module.exports.isBoolean = function(obj) {
	return typeof obj === 'boolean';
};

var isArray = module.exports.isArray = function(obj) {
	return isType(obj, 'Array');
};

var isNumber = module.exports.isNumber = function(obj) {
	return isType(obj, 'Number');
};

var isString = module.exports.isString = function(obj) {
	return isType(obj, 'String');
};

var isDate = module.exports.isDate = function(obj) {
	return isType(obj, 'Date') && !isNaN(obj.getTime());
};

var isObject = module.exports.isObject = function(obj) {
	return obj !== null && isType(obj, 'Object');
};

var isFunction = module.exports.isFunction = function(obj) {
	return typeof obj === 'function';
};

var isInteger = module.exports.isInteger = function(n) {
    return Number(n) === n && n % 1 === 0;
}

var isFloat = module.exports.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
}



var createElement = module.exports.createElement = function(tag, props) {

	var {className, text, bg, fontWeight, shadow, fixed, position, justifyContent, visible, invisible, display, alignItems, alignContent, float, align, rounded, margin, border, padding, ...props} = props;

	function addClass(name, condition) {
		if (condition)
			className = classNames(className, name);
	}

	// The text property may have several values
	if (isString(text))
		text = text.split(' ');

	///////////////////////////////////////////////////////////////////////

	addClass(`border`, isBoolean(border) || isString(border));
	addClass(`border-${border}`, isString(border));

	if (isObject(border)) {
		addClass(`border-left`, border.left);
		addClass(`border-top`, border.top);
		addClass(`border-right`, border.right);
		addClass(`border-bottom`, border.bottom);
	}
	
	///////////////////////////////////////////////////////////////////////

	addClass(`p-${padding}`, isString(padding) || isNumber(padding));

	if (isObject(padding)) {
		addClass(`pl-${padding.left}`, padding.left != undefined);
		addClass(`pt-${padding.top}`, padding.top != undefined);
		addClass(`pr-${padding.right}`, padding.right != undefined);
		addClass(`pb-${padding.bottom}`, padding.bottom != undefined);
		addClass(`px-${padding.x}`, padding.x != undefined);
		addClass(`py-${padding.y}`, padding.y != undefined);
	}

	///////////////////////////////////////////////////////////////////////

	addClass(`m-${margin}`, isString(margin) || isNumber(margin));

	if (isObject(margin)) {
		addClass(`ml-${margin.left}`, margin.left != undefined);
		addClass(`mt-${margin.top}`, margin.top != undefined);
		addClass(`mr-${margin.right}`, margin.right != undefined);
		addClass(`mb-${margin.bottom}`, margin.bottom != undefined);
		addClass(`mx-${margin.x}`, margin.x != undefined);
		addClass(`my-${margin.y}`, margin.y != undefined);
	}
	
	///////////////////////////////////////////////////////////////////////

	addClass(`rounded-${rounded}`, isString(rounded) || isNumber(rounded));

	if (isObject(rounded)) {
		addClass(`rounded-left`, rounded.left);
		addClass(`rounded-top`, rounded.top);
		addClass(`rounded-right`, rounded.right);
		addClass(`rounded-bottom`, rounded.bottom);
	}

	///////////////////////////////////////////////////////////////////////

	addClass(`justify-content-${justifyContent}`, isString(justifyContent));
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

	return React.createElement(tag, {...props, className});

}


module.exports.keyCodes = {
  esc:   27,
  space: 32,
  enter: 13,
  tab:   9,
  up:    38,
  down:  40
};


