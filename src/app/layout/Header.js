import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col header__logo">CryptoFy</div>
          <div className="col text-right">
            <a
              href="https://twitter.com/andydev01"
              rel="noopener noreferrer"
              target="_blank"
              className="header__icon"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://github.com/andyfrontend/cryptofy-react"
              rel="noopener noreferrer"
              target="_blank"
              className="header__icon"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
