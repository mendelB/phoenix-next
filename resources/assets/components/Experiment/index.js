/* global services */

import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

class Experiment extends React.Component {
  componentWillMount() {
    this.props.participateInExperiment(this.props.name);
  }

  render() {
    // @TODO: ugh...
    // if (services.SIXPACK_ENABLED === 'false') {
    //   return this.props.children[0];
    // }

    const experiments = this.props.experiments;

    if (Object.keys(experiments).length === 0 || ! experiments[this.props.name]) {
      return <p>loading...</p>;
    }

    const componentAlternative = this.props.children.filter((component) => {
      const alternative = get(component.props, 'alternative', false);

      if (alternative === experiments[this.props.name]) {
        return true;
      }

      return false;
    });

    // Render the designated alternative otherwise default to the control just in case.
    return (
      componentAlternative ? componentAlternative[0] : this.props.children[0]
    );
  }
}

export default Experiment;

Experiment.propTypes = {
  name: PropTypes.string.isRequired,
};
