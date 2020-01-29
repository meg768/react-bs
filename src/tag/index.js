import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { isObject, isNumber, isString, isBoolean, isArray, transformProps} from '../utils';


export default class Tag extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var {tag : TheTag, children, ...props} = transformProps(this.props);

        return (
            <TheTag {...props}>
                {children}
            </TheTag>
        );            
    }

    renderOld()
    {
        var {tag : TheTag, className, text, bg, fontWeight, shadow, fixed, position, justifyContent, visible, invisible, display, alignItems, alignContent, float, align, rounded, margin, border, padding, children, ...props} = this.props;

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

        ///////////////////////////////////////////////////////////////////////

        return (
            <TheTag className={className} {...props}>
                {children}
            </TheTag>
        );
        
    }

}

Tag.defaultProps = {
    tag: 'div'
};

Tag.propTypes = {
    tag              : PropTypes.any,
    visible          : PropTypes.bool,
    invisible        : PropTypes.bool,
    text             : PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    bg               : PropTypes.string,
    align            : PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline', 'text-top', 'text-bottom']),
    fontWeight       : PropTypes.oneOf(['bold', 'bolder', 'normal', 'light', 'lighter']),
    bg               : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
    border           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    rounded          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    display          : PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    margin           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    padding          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    float            : PropTypes.oneOf(['none', 'left', 'right'])
};

