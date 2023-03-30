import React from 'react';

const Header = ({ rates }) => {
    return (
        <div className="header">
            <div className="header__title">Курс валют</div>
            <div className="header__rates">
                <div className="header__rate">
                    <div className="header__currency">USD</div>
                    <div className="header__value">{(1 / rates.USD).toFixed(2)}</div>
                </div>
                <div className="header__rate">
                    <div className="header__currency">EUR</div>
                    <div className="header__value">{(1 / rates.EUR).toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;



