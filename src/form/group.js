import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isObject} from '../utils';
import Tag from '../tag';

/**
 * 
 * @visibleName Form.Group
 * 
 */
function Group(props)  {

    var {row, className, ...props} = props;

    // Backward compatability
    var {xs, sm, md, lg, xl, ...props} = props;

    className = classNames(className, {'row': row});
    className = classNames(className, {'form-group': true});

    function fix(name, prop) {
        if (isObject(prop)) {
            className = classNames(className, prop.offset ? `offset-${name}-${prop.offset}` : undefined);
            className = classNames(className, prop.width  ? `col-${name}-${prop.width}`     : undefined);
        }
        else if (prop != undefined) {
            className = classNames(className, `col-${name}-${prop}`);
        }
    }

    fix('xs', xs);
    fix('sm', sm);
    fix('md', md);
    fix('lg', lg);
    fix('xl', xl);

    return (
        <Tag className={className}  {...props}>
            {props.children}
        </Tag>
    );
}


export default Group;