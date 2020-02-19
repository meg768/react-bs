import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * 
 * @visibleName Form.Row
 * 
 */
function Row(props) {

    var {className, group, ...props} = props;

    className = classNames(className, 'form-row');
    className = classNames(className, {'form-group' : group});

    return (
        <Tag className={className} {...props}/>
    );
}

Row.propTypes = {
    /** Default tag */
    tag: PropTypes.any,
    group: PropTypes.bool
};

Row.defaultProps = {
    tag: 'div',
    group: false
};

export default Row;