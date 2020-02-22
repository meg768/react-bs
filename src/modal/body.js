import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * 
 * Specifies the body of a dialog.
 * 
 * @visibleName Modal.Body
 * 
 */
var Body = React.forwardRef((props, ref) => {
    var {tag, className, ...props} = props;

    return (
        <Tag ref={ref} tag={tag} className={classNames(className, 'modal-body')} {...props}>
            {props.children}
        </Tag>
    );

});

Body.defaultProps = {
    tag: 'div'
};

export default Body;
