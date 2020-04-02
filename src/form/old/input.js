import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * 
 * @visibleName Form.Input
 * 
 */

class Input extends React.Component {

    render() {
        var {children, plainText, readOnly, tag, size, className, ...props} = this.props;

        className = classNames(className, {'form-control':true});
        className = classNames(className, {'form-control-sm':size=='sm'});
        className = classNames(className, {'form-control-lg':size=='lg'});
        className = classNames(className, {'form-control-plaintext':plainText});
    
        return (
            <Tag tag={tag} readOnly={readOnly} className={className} {...props}>
                {children}
            </Tag>
    
        );
    
    }

};

Input.propTypes = {
    /** Default tag */
    tag: PropTypes.any,
    /** [Plain text](https://getbootstrap.com/docs/4.4/components/forms/#readonly-plain-text) */
    plainText: PropTypes.bool,
    /** [Size](https://getbootstrap.com/docs/4.4/components/forms/#sizing), **sm** or **lg** */
    size: PropTypes.string
};


Input.defaultProps = {
    tag: 'input',
    plainText: false,
    size: undefined
};


export default Input;