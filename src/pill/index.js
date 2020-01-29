import {React, classNames} from '../utils';
import Badge from '../badge';

export default function Pill(props)  {

    var {className, ...props} = props;

    return <Badge className={classNames(className, 'badge-pill')} {...props}/>;
};

