import React from 'react';
import classnames from 'classnames';
import { has } from 'lodash';
import { modifiers } from '../../helpers';

import './form-message.scss';

const renderMessage = (message) => {
  return <p>{message}</p>;
}

const renderValidationMessage = (error) => {
  return (
    <div>
      <h3>Hmm, there were some issues with your submission.</h3>
      <ul className="list -compacted">
        {error.fields.map((field, index) => {
          return <li key={index}>{field}</li>;
        })}
      </ul>
    </div>
  );
}

const FormMessage = ({ messaging }) => {
  let message, modifierClasses;

  // Error
  if (has(messaging, 'error')) {
    modifierClasses = 'error';

    // Validation Error
    if (messaging.error.code === 422) {
      message = renderErrorMessage(messaging.error);
    }

    message = renderMessage(messaging.error.message);
  }

  // Success
  if (has(messaging, 'success')) {
    modifierClasses = 'success';

    message = renderMessage(messaging.success.message);
  }

  if (message) {
    return <div className={classnames('form-message', modifiers(modifierClasses))}>{message}</div>;
  }

  return null;
};

export default FormMessage;
