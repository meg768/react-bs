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
    tag: 'div',

    align: undefined,
    alignContent: undefined,
    alignItems: undefined,
    bg: undefined,
    border: undefined,
    className: undefined,
    d: undefined,
    display: undefined,
    fixed: undefined,
    flex: undefined,
    float: undefined, 
    fontWeight: undefined,
    invisible: undefined,
    justifyContent: undefined,
    m: undefined,
    margin: undefined,
    mb: undefined,
    ml: undefined,
    mr: undefined,
    mt: undefined,
    mx: undefined,
    my: undefined,
    p: undefined,
    padding: undefined,
    pb: undefined,
    pl: undefined,
    position: undefined,
    pr: undefined,
    pt: undefined,
    px: undefined,
    py: undefined,
    rounded: undefined,
    shadow: undefined,
    text: undefined,
    visible: undefined    

};

Tag.propTypes = {

    tag: PropTypes.any,

    /** https://getbootstrap.com/docs/4.4/utilities/vertical-align */
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline', 'text-top', 'text-bottom']),
    /** https://getbootstrap.com/docs/4.4/utilities/vertical-align */
    alignContent: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/flex/#align-items */
    alignItems: PropTypes.any,
    /** 
     * Specifies background color. See https://getbootstrap.com/docs/4.4/utilities/colors/#background-color
     * 
     * */
    bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
    /** https://getbootstrap.com/docs/4.4/utilities/borders */
    border: PropTypes.any,
    className: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/display */
    d: PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    /** https://getbootstrap.com/docs/4.4/utilities/display */
    display: PropTypes.oneOf(['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']),
    /** https://getbootstrap.com/docs/4.4/utilities/position/#fixed-top */
    fixed: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/flex */
    flex: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/float */
    float: PropTypes.any, 
    /** https://getbootstrap.com/docs/4.4/utilities/text/#font-weight-and-italics */
    fontWeight: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/visibility */
    invisible: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/flex/#justify-content */
    justifyContent: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    m: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    margin: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    mb: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    ml: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    mr: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    mt: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    mx: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    my: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    p: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    padding: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    pb: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    pl: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/position */
    position: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    pr: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    pt: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    px: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/spacing */
    py: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/borders */    
    rounded: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/shadows */
    shadow: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/text */
    text: PropTypes.any,
    /** https://getbootstrap.com/docs/4.4/utilities/visibility */
    visible: PropTypes.any    
    
};

