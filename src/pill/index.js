import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from '../badge';

/**
 * 
 * A Pill is simply a __Badge__ with the __pill__ property set to true.
 * 
 */
var Pill = React.forwardRef((props, ref) => {
    return (
        <Badge ref={ref} {...props} pill={true}/>
    );
});

export default Pill;