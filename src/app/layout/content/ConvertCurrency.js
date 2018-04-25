import React from 'react';

export const ConvertCurrency = ({ convert }) => {
  return (
    <ul className="currency-convert text-center">
      <li
        className="currency-convert__item currency-convert__item--active"
        onClick={e => convert(e, 'usd')}
      >
        <i className="fas fa-dollar-sign currency-convert__icon" />
        <span className="currency-convert__name">USD</span>
      </li>
      <li className="currency-convert__item" onClick={e => convert(e, 'eur')}>
        <i className="fas fa-euro-sign currency-convert__icon" />
        <span className="currency-convert__name">EUR</span>
      </li>
    </ul>
  );
};
