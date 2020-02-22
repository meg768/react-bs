import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * @visibleName Modal.Title
 */

var Title = React.forwardRef((props, ref) => {
    var {tag, className, ...props} = props;

    return (
        <Tag ref={ref} tag={tag} className={classNames(className, 'modal-title')} {...props}/>
    );

});


Title.defaultProps = {
    tag: 'h5'
};

export default Title;