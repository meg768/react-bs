import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tag from '../tag';

import CardHeader from './card-header';
import CardTitle from './card-title';
import CardSubtitle from './card-subtitle';
import CardText from './card-text';
import CardBody from './card-body';

export default function Card(props) {

    var {tag, className, ...props} = props;

    className = classNames(className, 'card');

    return (
        <Tag tag={tag} className={className} {...props}/>
    );
}

Card.propTypes = {
    /** Default tag */
    tag : PropTypes.string    
};

Card.defaultProps = {
    tag: 'div'
};


Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Body = CardBody;

