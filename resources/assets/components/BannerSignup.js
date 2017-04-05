import React from 'react';
import { Provider } from 'react-redux';

const BannerSignup = ({ store }) => (
  <Provider store={store}>
    <div>
      REACT IS HERE
    </div>
  </Provider>
);

export default BannerSignup;
