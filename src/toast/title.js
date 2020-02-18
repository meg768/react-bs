import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';


/**
 * @visibleName Toast.Title
 */

function Title(props) {
    return <Tag  {...props}/>
}

Title.defaultProps = {
    fontWeight : 'bold',
    margin : {right:'auto'}
};

export default Title;
