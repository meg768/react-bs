import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag';

/**
 * 
 * @visibleName Alert.Separator
 * 
 */
export default function Component(props) {

    return (
        <Tag {...props}/>
    );
};

Component.propTypes = {
    /** Default tag */
    tag: PropTypes.string
};

Component.defaultProps = {
    tag: 'hr'
};
