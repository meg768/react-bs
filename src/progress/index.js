import {React, PropTypes, classNames} from '../utils';
import Tag from '../tag';




/**
 * 
 * ---------------
 * sfdlöäksdfgölXX
 * 
 * @param {*} props  klajsdhfklajshdfX
 * @public
 */
export  function Progress(props) {


    var {className, children, ...props} = props;

    className = classNames(className, 'progress');

    return (
        <Tag className={className} {...props}>
            {children}
        </Tag>
    );
};



/**
 * 
 * asödflksdöäflks  l ds sdf f ds 
 * 
 * @param {object} props
 * @public
 */
Progress.Bar = function(props) {

    var {className, striped, style, role, min, max, value, children, ...props} = props;

    className = classNames(className, 'progress-bar');
    className = classNames(className, striped ? 'progress-bar-striped' : undefined);

    if (min) {
        props = {'aria-valuemin':min, ...props};
    }

    if (max) {
        props = {'aria-valuemax':max, ...props};
    }

    if (value) {
        props = {'aria-valuenow':value, ...props};
        style = {'width':`${value}%`, ...style};
    }

    return (
        <Tag className={className} role={role} style={style} {...props}>
            {children}
        </Tag>
    );

}


/**
 * 
 * asldkfjalösdkfjööfdg sadfölk sdfgsdöflgkj sdflk 
 * 
 * @public
 */
Progress.Bar.propTypes = {
    /** Min value */
    min: PropTypes.any,
    /** Max value */
    max: PropTypes.any,
    /** Current value */
    value: PropTypes.any
};

Progress.Bar.defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    style: {},
    role: 'progressbar'
};


//module.exports = Progress;
//export default Progress;