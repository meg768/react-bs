import {React, PropTypes, isObject, isNumber, isString, classNames} from '../utils';
import Tag from '../tag';
import Row from '../row';
import Col from '../col';

export default function Container(props) {

    var {className, fluid, sm, md, lg, xl, ...props} = props;

    className = classNames(className, {'container' : true});
    className = classNames(className, {'container-fluid' : fluid});
    className = classNames(className, {'container-sm' : sm});
    className = classNames(className, {'container-md' : md});
    className = classNames(className, {'container-lg' : lg});
    className = classNames(className, {'container-xl' : xl});

    return (
        <Tag className={className} {...props}/>
    );
}

Container.propTypes = {
    fluid : PropTypes.bool
};

Container.defaultProps = {
    tag: 'div',
    fluid: false
}


Container.Col = Col;
Container.Row = Row; 
