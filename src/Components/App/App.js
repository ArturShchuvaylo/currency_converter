import React, { useEffect, useState } from 'react';
import { getApiResource } from '../../Services';
import Converter from '../Converter';
import Header from '../Header';


function App() {
  const [rates, setRates] = useState({})
  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('UAH');

  const getRate = async () => {
    const result = await getApiResource('https://api.exchangerate-api.com/v4/latest/UAH');
    console.log(result.rates);
    setRates(result.rates);
  }

  useEffect(() => {
    getRate()
  }, [])



  return (
    <div className="App">
      <div className='top'>
        <Header rates={rates} />
      </div >
      <div className='bottop'>
        <Converter value={0} currency={currencyOne} />
        <Converter value={0} currency={currencyTwo} />
      </div >
    </div>
  );
}

export default App;
