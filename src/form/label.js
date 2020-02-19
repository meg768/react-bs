import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * 
 * @visibleName Form.Label
 * 
 */
function Label(props)  {

    var {className, inline, ...props} = props;

    className = classNames(className, {'col-form-label': inline});
    
    return (
        <Tag className={className} {...props}>
            {props.children}
        </Tag>
    );

};

Label.propTypes = {
    /** Default tag */
    tag: PropTypes.any,
    /** Inline style */
    inline: PropTypes.bool
};

Label.defaultProps = {
    tag: 'label',
    inline: false
};




export default Label;