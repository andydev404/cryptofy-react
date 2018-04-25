import React from 'react';
import PropTypes from 'prop-types';

export const ProgressBar = ({ value }) => {
  return <div className="progress-bar" style={{ width: `${value}%` }} />;
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
};
