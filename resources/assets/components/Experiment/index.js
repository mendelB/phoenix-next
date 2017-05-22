import React from 'react';
import PropTypes from 'prop-types';
import { participate } from '../../helpers/sixpack';

class Experiment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('experiment component is mounting');
    console.log(this.props);
    // console.log(session);

    // sixpack.participate('test-exp', ['alt-one', 'alt-two'], (err, res) => {
    //   if (err) throw err;
    //   console.log(res);
    // });

    const alternative = participate(this.props.name);
    console.log(alternative);
  }

  render() {
    return (
      this.props.children[1]
    );
  }
}

export default Experiment;

Experiment.propTypes = {
  name: PropTypes.string.isRequired,
};
