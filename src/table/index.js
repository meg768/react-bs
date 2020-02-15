import {React, PropTypes, classNames} from '../utils';
import Tag from '../tag';

export default class Table extends React.Component  {

    static propTypes = {
        borderless : PropTypes.bool,
        bordered   : PropTypes.bool,
        striped    : PropTypes.bool,
        dark       : PropTypes.bool,
        size       : PropTypes.string

    };

    static get defaultProps() {
        return {
            striped    : false,
            dark       : false,
            bordered   : false,
            borderless : false,
            responsive : false,
            size       : 'md'
        };
    }


    render() {
        var {style, responsive, className, striped, dark, hover, bordered, borderless, size, ...props} = this.props;

        className = classNames(className, 'table');
        className = classNames(className, striped    ? 'table-striped'       : false);
        className = classNames(className, hover      ? 'table-hover'         : false);
        className = classNames(className, dark       ? 'table-dark'          : false);
        className = classNames(className, bordered   ? 'table-bordered'      : false);
        className = classNames(className, borderless ? 'table-borderless'    : false);
        className = classNames(className, size       ? 'table-' + size       : false);

        var table = (
            <table {...props} className={className} style={style}>
                {this.props.children}
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
    }
};

Table.Row = (props) => {

    var {className, bg, color, ...props} = props;

    className = classNames(className, {[`table-${color}`]:color});

    return <Tag tag='tr' className={className} {...props}/>
}

Table.Col = function(props)  {
    var {className, header, color, ...other} = props;

    className = classNames(className, {[`table-${color}`]:color});

    return <Tag tag = {header ? 'th' : 'td'} className={className} {...other}/>;
}

Table.Header = function(props)  {
    var {className, light, dark, ...props} = props;

    className = classNames(className, {'thead-dark': dark});
    className = classNames(className, {'thead-light': light});

    return <Tag tag='thead' className={className} {...props}/>
}

Table.Body = function(props)  {
    return <Tag tag='tbody' {...props}/>
}
