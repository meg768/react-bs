import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { isObject, isNumber, isString, isBoolean, isArray } from 'util';

export default class Tag extends React.Component {

    constructor(props) {
        super(props);
    }

    render()
    {
        var {tag : TheTag, className, style = {}, text, bg, fontWeight, shadow, fixed, position, justifyContent, visible, invisible, display, alignItems, alignContent, float, align, rounded, margin, border, padding, children, ...props} = this.props;

        // Styles
        var {opacity, left, top, right, bottom, width, height, ...props} = props;

        // Backward compatability
        var {color, textColor, verticalAlign, backgroundColor, textAlign, ...props} = props;

        function addStyle(name, value) {
            if (value != undefined)
                style[name] = value;
        }

        function addClass(name, condition) {
            if (condition)
                className = classNames(className, name);
        }


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
            addClass(`px-${padding.horizontal}`, padding.horizontal != undefined);
            addClass(`py-${padding.vertical}`, padding.vertical != undefined);
        }

        ///////////////////////////////////////////////////////////////////////

        addClass(`m-${margin}`, isNumber(margin));

        if (isString(margin)) {
            addStyle('margin', margin);
        }

        if (isObject(margin)) {
            addClass(`ml-${margin.left}`, margin.left != undefined);
            addClass(`mt-${margin.top}`, margin.top != undefined);
            addClass(`mr-${margin.right}`, margin.right != undefined);
            addClass(`mb-${margin.bottom}`, margin.bottom != undefined);
            addClass(`mx-${margin.horizontal}`, margin.horizontal != undefined);
            addClass(`my-${margin.vertical}`, margin.vertical != undefined);
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
        addClass(`text-${text}`, isString(text));
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

        // Backward compatability for now...    
        addClass(`text-${textAlign}`, isString(textAlign));
        addClass(`text-${textColor}`, isString(textColor));
        addClass(`bg-${backgroundColor}`, isString(backgroundColor));
        addClass(`text-${color}`, isString(color));
        addClass(`align-${verticalAlign}`, isString(verticalAlign));

        ///////////////////////////////////////////////////////////////////////

        // Special case for text...

        if (isArray(text)) {
            text.forEach((item) => {
                addClass(`text-${item}`, isString(item));
            });
        }

        ///////////////////////////////////////////////////////////////////////

        addStyle('width', width);
        addStyle('height', height);
        addStyle('left', left);
        addStyle('top', top);
        addStyle('right', right);
        addStyle('bottom', bottom);
        addStyle('opacity', opacity);


        return (
            <TheTag className={className} style={style} {...props}>
                {children}
            </TheTag>
        );
        
    }

}

Tag.defaultProps = {
    tag: 'div'
};

Tag.propTypes = {
    tag              : PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    visible          : PropTypes.bool,
    invisible        : PropTypes.bool,
    text             : PropTypes.string,
    bg               : PropTypes.string,
    align            : PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline', 'text-top', 'text-bottom']),
    fontWeight       : PropTypes.oneOf(['bold', 'bolder', 'normal', 'light', 'lighter']),
    textAlign        : PropTypes.oneOf(['left', 'right', 'center']),
    bg               : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
    border           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    rounded          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    display          : PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    margin           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    padding          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    float            : PropTypes.oneOf(['none', 'left', 'right'])
};

