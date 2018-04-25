import React from 'react';

export const ProgressBar = ({ value }) => {
  return <div className="progress-bar" style={{ width: `${value}%` }} />;
};
