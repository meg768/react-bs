import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';
import TableCol from './col';
import TableHeader from './header';
import TableBody from './body';
import TableRow from './row';

/**
 * See https://getbootstrap.com/docs/4.4/content/tables
 */
export default function Table(props)  {

    var {responsive, className, striped, dark, hover, bordered, borderless, size, ...props} = props;

    className = classNames(className, 'table');
    className = classNames(className, striped    ? 'table-striped'       : false);
    className = classNames(className, hover      ? 'table-hover'         : false);
    className = classNames(className, dark       ? 'table-dark'          : false);
    className = classNames(className, bordered   ? 'table-bordered'      : false);
    className = classNames(className, borderless ? 'table-borderless'    : false);
    className = classNames(className, size       ? 'table-' + size       : false);

    var table = (
        <table {...props} className={className}>
            {props.children}
        </table>
    );

    if (responsive) {
        var wrapperClassName = typeof responsive == 'string' ? 'table-responsive-' + responsive : 'table-responsive';

        table = (
            <div className={wrapperClassName}>
                {table}
            </div>
        );

    }

    return table;
};

Table.propTypes = {
    borderless : PropTypes.bool,
    bordered   : PropTypes.bool,
    striped    : PropTypes.bool,
    dark       : PropTypes.bool,
    hover      : PropTypes.bool,
    responsive : PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    size       : PropTypes.string

};

Table.defaultProps = {
    hover      : false,
    striped    : false,
    dark       : false,
    bordered   : false,
    borderless : false,
    responsive : false,
    size       : 'md'
};


Table.Header = TableHeader;
Table.Col = TableCol;
Table.Row = TableRow;
Table.Body = TableBody;

