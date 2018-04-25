import React, { Component } from 'react';
import { CurrenciesItem } from './Currencies-item';
import { ConvertCurrency } from './ConvertCurrency';
import { ProgressBar } from './ProgressBar';

export class Currencies extends Component {
  state = {
    cryptoCurrencies: [],
    currencyType: 'usd',
    ProgressBar: 0,
    intervalCurrency: () => {},
    intervalProgressBar: () => {}
  };

  componentDidMount() {
    let count = 0;
    let intervalProgressBar = setInterval(() => {
      count++;
      if (count === 10) {
        this.setState({ ProgressBar: 10 });
        count = 0;
      } else {
        this.setState({ ProgressBar: this.state.ProgressBar + 10 });
      }
    }, 1000);

    this.setState({
      intervalCurrency: setInterval(this.fetchCurrencies(), 10000),
      intervalProgressBar
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalCurrency, this.state.intervalProgressBar);
  }

  fetchCurrencies = () => {
    fetch(
      `https://api.coinmarketcap.com/v1/ticker/?convert=${this.state.currencyType.toUpperCase()}&limit=40`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({ cryptoCurrencies: data });
      });
  };

  handleConvertCurrencies = (e, currency) => {
    document
      .querySelectorAll('.currency-convert li')
      .forEach(node => node.classList.remove('currency-convert__item--active'));
    e.currentTarget.classList.add('currency-convert__item--active');
    fetch(
      `https://api.coinmarketcap.com/v1/ticker/?convert=${currency.toUpperCase()}&limit=40`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({ cryptoCurrencies: data, currencyType: currency });
      });
  };

  render() {
    return (
      <div>
        <ProgressBar value={this.state.ProgressBar} />
        <ConvertCurrency convert={this.handleConvertCurrencies} />
        <div className="row currencies">
          {this.state.cryptoCurrencies &&
            this.state.cryptoCurrencies.map((data, index) => (
              <CurrenciesItem
                key={index}
                currency={data}
                type={this.state.currencyType}
              />
            ))}
        </div>
      </div>
    );
  }
}
