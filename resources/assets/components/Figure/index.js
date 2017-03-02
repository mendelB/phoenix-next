import React from 'react';
import classnames from 'classnames';
import { modifiers } from '../../helpers';
import './figure.scss';

const Figure = ({alignment, verticalAlignment, size, image, className, imageClassName, alt, children}) => (
  <article className={classnames('figure', className, modifiers(alignment, verticalAlignment, size))}>
    <div className="figure__media">
      <img className={imageClassName} alt={alt} src={image} />
    </div>
    <div className="figure__body">
      {children}
    </div>
  </article>
);

Figure.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'right']),
  verticalAlignment: React.PropTypes.oneOf(['center']),
  size: React.PropTypes.oneOf(['small', 'medium', 'large']),
  image: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
};

export default Figure;
