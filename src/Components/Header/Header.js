import React from 'react';

const Header = ({ rates }) => {
    const usdToUah = rates && rates.USD ? (1 / rates.USD * rates.UAH).toFixed(2) : '--';
    const eurToUah = rates && rates.EUR ? (1 / rates.EUR * rates.UAH).toFixed(2) : '--';
    return (
        <div className="header">
            <div className="header__title">Курс валют</div>
            <div className="header__rates">
                <div className="header__rate">
                    <div className="header__currency">USD</div>
                    <div className="header__value">{usdToUah}</div>
                </div>
                <div className="header__rate">
                    <div className="header__currency">EUR</div>
                    <div className="header__value">{eurToUah}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;



