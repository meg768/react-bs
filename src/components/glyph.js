import React, {Component} from 'react';
import classNames from 'classnames';
import Tag from './tag.js';


export default function Glyph(props) {

    var {tag = 'i', className, name, glyph, icon, ...other} = props;

    if (icon && !name)
        name = icon;

    if (glyph && !name)
        name = glyph;

    return (
        <Tag tag={tag} className={classNames(className, 'icon-'+name)} {...other}/>
    );
}

Glyph.defaultProps = {
    prefix: 'icon-'
};