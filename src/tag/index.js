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
    align            : PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline', 'text-top', 'text-bottom']),
    alignItems       : PropTypes.any,
    bg               : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
    border           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    display          : PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    fixed            : PropTypes.any,
    float            : PropTypes.oneOf(['none', 'left', 'right']),
    fontWeight       : PropTypes.oneOf(['bold', 'bolder', 'normal', 'light', 'lighter']),
    invisible        : PropTypes.bool,
    justifyContent   : PropTypes.any,
    margin           : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    padding          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    position         : PropTypes.any,
    rounded          : PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
    shadow           : PropTypes.any,
    tag              : PropTypes.any,
    text             : PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    visible          : PropTypes.bool
};

