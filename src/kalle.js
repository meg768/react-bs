import React from 'react';

import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from './tag.js';

export default class Kalle extends React.Component  {


    static propTypes = {
        fluid : PropTypes.bool
    };

    static defaultProps = {
        fluid: false
    }

    render() {
        var {className, fluid, ...props} = this.props;

        className = classNames(className, {'container' : true});
        className = classNames(className, {'container-fluid' : fluid});

        return (
            <div className={className} {...props}>
                {this.props.children}
            </div>
        );
    }
};
