import React from 'react';
import Palette from 'react-palette';
import PropTypes from 'prop-types';

const setTwoDecimal = price => {
  let defaultPrice = Number(price);
  return defaultPrice
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

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
              style={{ background: palette.vibrant }}
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
            ? `${type.toUpperCase()} $${setTwoDecimal(currency.quote.USD.price)}`
            : `${type.toUpperCase()} €${setTwoDecimal(currency.quote.EUR.price)}`}
        </h3>
        <div className="currencies-info">
          <div className="currencies-info__change-24h">
            <p className="currencies-info__change-24h-title">Change (24h)</p>
            {type === 'usd' ? 
            (currency.quote.USD.percent_change_24h < 0 ? (
              <p className="currency-down">{setTwoDecimal(currency.quote.USD.percent_change_24h)}%</p>
            ) : (
              <p className="currency-up">{setTwoDecimal(currency.quote.USD.percent_change_24h)}%</p>
            )) : (currency.quote.EUR.percent_change_24h < 0 ? (
              <p className="currency-down">{setTwoDecimal(currency.quote.EUR.percent_change_24h)}%</p>
            ) : (
              <p className="currency-up">{setTwoDecimal(currency.quote.EUR.percent_change_24h)}%</p>
            ))}
          </div>
          <div className="currencies-info__change-24h">
            <p className="currencies-info__change-24h-title">Change (7d)</p>
            {type === 'usd' ? 
            (currency.quote.USD.percent_change_7d < 0 ? (
              <p className="currency-down">{setTwoDecimal(currency.quote.USD.percent_change_7d)}%</p>
            ) : (
              <p className="currency-up">{setTwoDecimal(currency.quote.USD.percent_change_7d)}%</p>
            )) : (currency.quote.EUR.percent_change_7d < 0 ? (
              <p className="currency-down">{setTwoDecimal(currency.quote.EUR.percent_change_7d)}%</p>
            ) : (
              <p className="currency-up">{setTwoDecimal(currency.quote.EUR.percent_change_7d)}%</p>
            ))}
          </div>
        </div>
        <div className="currencies-price-btc">Actualizado: {currency.last_updated.substring(0,10)}</div>
      </div>
    </article>
  );
};

CurrenciesItem.propTypes = {
  currency: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};
