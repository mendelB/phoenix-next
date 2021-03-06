import PropTypes from 'prop-types';
import React from 'react';
import { Flex, FlexCell } from '../Flex';
import {
  getArray as storageGetArray,
  remove as storageRemove,
  SIGNUP_STORAGE_KEY,
  COMPETITION_STORAGE_KEY,
} from '../../helpers/storage';
import { getSession } from '../../helpers/analytics';
import './debugger.scss';

const Debugger = (props) => {
  if (props.user.role !== 'admin') {
    return null;
  }

  return (
    <div className="debugger">
      <Flex>
        <FlexCell width="one-third">
          <div>
            <h1>analytics debug</h1>
            <p>Device Id: <span>{ getSession().deviceId }</span></p>
            <p>Session Id: <span>{ getSession().id }</span></p>
            <p>Last Updated: <span>{ new Date(getSession().lastUpdatedAt).toString() }</span></p>
          </div>
        </FlexCell>
        <FlexCell width="one-third">
          <div>
            <h1>signups storage</h1>
            <p>local storage signups: <span>{ storageGetArray(props.user.id, SIGNUP_STORAGE_KEY).join(',') }</span></p>
            <p>redux store signups: <span>{ props.signups.join(',') }</span></p>
            <button className="button" onClick={() => storageRemove(props.user.id, SIGNUP_STORAGE_KEY)}>clear signup cache</button>
            <p>storage changes wont show until refresh</p>
          </div>
        </FlexCell>
        <FlexCell width="one-third">
          <div>
            <h1>competitions storage</h1>
            <p>local storage competitions: <span>{ storageGetArray(props.user.id, COMPETITION_STORAGE_KEY).join(',') }</span></p>
            <p>redux store competitions: <span>{ props.competitions.join(',') }</span></p>
            <button className="button" onClick={() => storageRemove(props.user.id, COMPETITION_STORAGE_KEY)}>clear competitions cache</button>
            <p>storage changes wont show until refresh</p>
          </div>
        </FlexCell>
      </Flex>
    </div>
  );
};

Debugger.propTypes = {
  signups: PropTypes.arrayOf(PropTypes.string),
  competitions: PropTypes.arrayOf(PropTypes.string),
  user: PropTypes.shape({
    id: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

Debugger.defaultProps = {
  signups: [],
  competitions: [],
  user: {
    id: null,
    role: 'anonymous',
  },
};

export default Debugger;
