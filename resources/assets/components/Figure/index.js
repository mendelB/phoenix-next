import React from 'react';
import classnames from 'classnames';
import { modifiers } from '../../helpers';
import './figure.scss';

export const BaseFigure = ({alignment, verticalAlignment, media, size, className, children}) => (
  <article className={classnames('figure', className, modifiers(alignment, verticalAlignment, size))}>
    <div className="figure__media">{media}</div>
    <div className="figure__body">{children}</div>
  </article>
);

BaseFigure.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'right']),
  verticalAlignment: React.PropTypes.oneOf(['center']),
  size: React.PropTypes.oneOf(['small', 'medium', 'large']),
  media: React.PropTypes.element,
};

export const Figure = (props) => {
  const media = <img className={props.imageClassName} alt={props.alt} src={props.image} />;

  return <BaseFigure {...props} media={media} />;
};

Figure.propTypes = {
  image: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default Figure;
