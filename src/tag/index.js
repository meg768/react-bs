import {React, classNames, PropTypes, isObject, isNumber, isString, isBoolean, isArray, transformProps} from '../utils';

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

