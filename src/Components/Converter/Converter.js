import React from 'react';

const defaultCurrencies = ['UAH', 'USD', 'EUR', 'PLN'];

const Converter = ({ value, currency, }) => (
    <div className="block">
        <ul className="currencies">
            {defaultCurrencies.map((cur) => (
                <li
                    className={currency === cur ? 'active' : ''}
                    key={cur}>
                    {cur}
                </li>
            ))}
        </ul>
        <input
            value={value}
            type="number"
            placeholder={0}
        />
    </div>
);
export default Converter;