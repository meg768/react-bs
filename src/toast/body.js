import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';



/**
 * @visibleName Toast.Body
 */

function Body(props) {

    var {className, ...props} = props;

    return <Tag className={classNames(className, 'toast-body')} {...props}/>
};

export default Body;