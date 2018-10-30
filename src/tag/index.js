import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { isObject, isNumber, isString, isBoolean } from 'util';

export default class Tag extends React.Component  {

    render() {
        var {tag : TheTag, justifyContent, visible, invisible, display, alignItems, alignContent, textAlign, float, verticalAlign, rounded, className, textColor, backgroundColor, margin, border, padding, children, ...other} = this.props;


        if (isObject(border)) {
            className = classNames(className, {'border-left':border.left});
            className = classNames(className, {'border-top':border.top});
            className = classNames(className, {'border-right':border.right});
            className = classNames(className, {'border-bottom':border.bottom});
            className = classNames(className, {'border':true});
        }
        else if (isString(border)) {
            className = classNames(className, {[`border-${border}`]:true});
            className = classNames(className, {'border':true});
        }
        else if (border) {
            className = classNames(className, {'border':true});
        }
        
        ///////////////////////////////////////////////////////////////////////

        if (isNumber(padding)) {
            className = classNames(className, {[`p-${padding}`]:padding});
    
        }
        else if (isObject(padding)) {
            className = classNames(className, {[`pl-${padding.left}`]:padding.left});
            className = classNames(className, {[`pr-${padding.right}`]:padding.right});
            className = classNames(className, {[`pt-${padding.top}`]:padding.top});
            className = classNames(className, {[`pb-${padding.bottom}`]:padding.bottom});
            className = classNames(className, {[`px-${padding.horizontal}`]:padding.horizontal});
            className = classNames(className, {[`py-${padding.vertical}`]:padding.vertical});
        }

        ///////////////////////////////////////////////////////////////////////
    
        if (isNumber(margin)) {
            className = classNames(className, {[`m-${margin}`]:margin});
        }
        else if (isObject(margin)) {
            className = classNames(className, {[`ml-${margin.left}`]:margin.left});
            className = classNames(className, {[`mr-${margin.right}`]:margin.right});
            className = classNames(className, {[`mt-${margin.top}`]:margin.top});
            className = classNames(className, {[`mb-${margin.bottom}`]:margin.bottom});
            className = classNames(className, {[`mx-${margin.horizontal}`]:margin.horizontal});
            className = classNames(className, {[`my-${margin.vertical}`]:margin.vertical});
        }
        
        ///////////////////////////////////////////////////////////////////////


        if (alignItems != undefined) {
            if (isString(alignItems)) {
                className = classNames(className, {[`d-flex`]:true});
                className = classNames(className, {[`align-items-${alignItems}`]:true});

            }
        }

        ///////////////////////////////////////////////////////////////////////


        if (alignContent != undefined) {
            if (isString(alignItems)) {
                className = classNames(className, {[`d-flex`]:true});
                className = classNames(className, {[`align-content-${alignContent}`]:true});

            }
        }
        
        
        ///////////////////////////////////////////////////////////////////////


        if (justifyContent != undefined) {
            if (isString(justifyContent)) {
                className = classNames(className, {[`d-flex`]:true});
                className = classNames(className, {[`justify-content-${justifyContent}`]:true});

            }
        }

        ///////////////////////////////////////////////////////////////////////

        if (isString(textColor)) {
            className = classNames(className, {[`text-${textColor}`]:true});
        }

        ///////////////////////////////////////////////////////////////////////
    
        if (isString(backgroundColor)) {
            className = classNames(className, {[`bg-${backgroundColor}`]:true});
        }
    
        ///////////////////////////////////////////////////////////////////////

        if (isString(display)) {
            className = classNames(className, {[`d-${display}`]:true});
        }
    
        ///////////////////////////////////////////////////////////////////////

        if (isString(verticalAlign)) {
            className = classNames(className, {[`align-${verticalAlign}`]:true});
        }
    
        ///////////////////////////////////////////////////////////////////////

        if (isString(float)) {
            className = classNames(className, {[`float-${float}`]:true});
        }
    
        ///////////////////////////////////////////////////////////////////////

        if (isString(textAlign)) {
            className = classNames(className, {[`text-${textAlign}`]:true});
        }
        
        ///////////////////////////////////////////////////////////////////////

        if (isBoolean(rounded)) {
            className = classNames(className, {[`rounded`]:rounded});
        }
        else if (isString(rounded)) {
            className = classNames(className, {[`rounded-${rounded}`]:rounded});
        }
        else if (isNumber(rounded)) {
            className = classNames(className, {[`rounded-${rounded}`]:true});
        }
        else if (isObject(rounded)) {
            className = classNames(className, {'rounded-left':rounded.left});
            className = classNames(className, {'rounded-top':rounded.top});
            className = classNames(className, {'rounded-right':rounded.right});
            className = classNames(className, {'rounded-bottom':rounded.bottom});
    
        }

        ///////////////////////////////////////////////////////////////////////
    
        className = classNames(className, {'visible':visible});

        ///////////////////////////////////////////////////////////////////////

        className = classNames(className, {'invisible':invisible});
    
    
        return (
            <TheTag className={className} {...other}>
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
    textColor        : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted']),
    textAlign        : PropTypes.oneOf(['left', 'right', 'center']),
    verticalAlign    : PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline', 'text-top', 'text-bottom']),
    backgroundColor  : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
    border           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    rounded          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    display          : PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    margin           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    padding          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    float            : PropTypes.oneOf(['none', 'left', 'right'])
};

