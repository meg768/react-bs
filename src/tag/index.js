import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { isObject, isNumber, isString, isBoolean } from 'util';

export default function Tag(props)  {
    var {tag : TheTag, visible, invisible, display, textAlign, verticalAlign, roundedBorder, className, textColor, backgroundColor, margin, border, borderColor, padding, children, ...other} = props;


    if (isObject(border)) {
        className = classNames(className, {'border-left':border.left});
        className = classNames(className, {'border-top':border.top});
        className = classNames(className, {'border-right':border.right});
        className = classNames(className, {'border-bottom':border.bottom});
    }
    else if (border) {
        className = classNames(className, {'border':true});

    }

    if (isString(borderColor)) {
        className = classNames(className, {[`border-${borderColor}`]:true});
    }


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

    if (isString(textColor)) {
        className = classNames(className, {[`text-${textColor}`]:true});
    }

    if (isString(backgroundColor)) {
        className = classNames(className, {[`bg-${backgroundColor}`]:true});
    }

    if (isString(display)) {
        className = classNames(className, {[`d-${display}`]:true});
    }

    if (isString(verticalAlign)) {
        className = classNames(className, {[`align-${verticalAlign}`]:true});
    }

    if (isString(textAlign)) {
        className = classNames(className, {[`text-${textAlign}`]:true});
    }

    if (isBoolean(roundedBorder)) {
        className = classNames(className, {[`rounded`]:roundedBorder});
    }
    else if (isString(roundedBorder)) {
        className = classNames(className, {[`rounded-${roundedBorder}`]:roundedBorder});
    }
    else if (isNumber(roundedBorder)) {
        className = classNames(className, {[`rounded-${roundedBorder}`]:true});
    }
    else if (isObject(roundedBorder)) {
        className = classNames(className, {'rounded-left':roundedBorder.left});
        className = classNames(className, {'rounded-top':roundedBorder.top});
        className = classNames(className, {'rounded-right':roundedBorder.right});
        className = classNames(className, {'rounded-bottom':roundedBorder.bottom});

    }

    className = classNames(className, {'visible':visible});
    className = classNames(className, {'invisible':invisible});


    return (
        <TheTag className={className} {...other}>
            {children}
        </TheTag>
    );
}

Tag.defaultProps = {
    tag: 'div'

};

Tag.propTypes = {
    tag: PropTypes.string,
    visible: PropTypes.bool,
    invisible: PropTypes.bool,
    textColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted']),
    backgroundColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
    border: PropTypes.oneOf(['left', 'top', 'right', 'bottom', 'horizontal', 'vertical', PropTypes.number]),
    roundedBorder: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'circle', PropTypes.number]),
    display: PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    margin: PropTypes.any
};

