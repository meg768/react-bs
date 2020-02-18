import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../tag';

/**
 * @visibleName Toast.Subtitle
 */

function Subtitle(props) {
    return <Tag  {...props}/>
}

Subtitle.defaultProps = {
    tag   : 'small',
    text  : 'muted'
};

export default Subtitle;
