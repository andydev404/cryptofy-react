import React from 'react';
import Palette from 'react-palette';
import PropTypes from 'prop-types';

export const CurrenciesItem = ({ currency, type }) => {
  return (
    <article className="col-md-6 col-lg-3">
      <div className="currencies__item">
        <Palette
          image={
            process.env.PUBLIC_URL + `/img/${currency.symbol.toLowerCase()}.png`
          }
        >
          {palette => (
            <div
              className="currency-thumbnail-content"
              style={{
                background: palette.vibrant
              }}
            >
              <img
                className="currency-thumbnail-content__img"
                src={
                  process.env.PUBLIC_URL +
                  `/img/${currency.symbol.toLowerCase()}.png`
                }
                alt=""
              />
            </div>
          )}
        </Palette>
        <span className="currencies__short-name">
          {currency.symbol.toUpperCase()}
        </span>
        <h3 className="currencies__name">{currency.name}</h3>
        <h3 className="currencies__price">
          {type === 'usd'
            ? `${type.toUpperCase()} $${currency.price_usd}`
            : `${type.toUpperCase()} €${currency.price_eur}`}
        </h3>
        <div className="currencies-info">
          <div className="currencies-info__change-24h">
            <p className="currencies-info__change-24h-title">Change (24h)</p>
            {currency.percent_change_24h.indexOf('-') >= 0 ? (
              <p className="currency-down">{currency.percent_change_24h}%</p>
            ) : (
              <p className="currency-up">{currency.percent_change_24h}%</p>
            )}
          </div>
          <div className="currencies-info__change-24h">
            <p className="currencies-info__change-24h-title">Change (7d)</p>
            {currency.percent_change_7d.indexOf('-') >= 0 ? (
              <p className="currency-down">{currency.percent_change_7d}%</p>
            ) : (
              <p className="currency-up">{currency.percent_change_7d}%</p>
            )}
          </div>
        </div>
        <div className="currencies-price-btc">{currency.price_btc} btc</div>
      </div>
    </article>
  );
};

CurrenciesItem.propTypes = {
  currency: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};
