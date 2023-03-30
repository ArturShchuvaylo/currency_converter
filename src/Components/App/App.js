import React, { useEffect, useState } from 'react';
import { getApiResource } from '../../Services';
import Converter from '../Converter';
import Header from '../Header';

const api = 'https://v6.exchangerate-api.com/v6/8ccae567c62bbcf74c0715ca/latest/USD';

function App() {

  const [rates, setRates] = useState({})


  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('UAH');

  const [fieldOne, setFieldOne] = useState(0)
  const [fieldTwo, setFieldTwo] = useState(0)

  const getRate = async () => {
    const result = await getApiResource(api);
    setRates(result.conversion_rates);
  }


  const onChangeFieldOne = (value) => {
    const num = value / rates[currencyOne];
    const sum = (num * rates[currencyTwo]).toFixed(2);

    setFieldOne(value)
    setFieldTwo(sum)

  }
  const onChangeFieldTwo = (value) => {
    const num = rates[currencyOne] / rates[currencyTwo];
    const sum = ((num * value)).toFixed(2);

    setFieldTwo(value)
    setFieldOne(sum)
  }
  const onChangeCurrencyOne = (cur) => {
    setCurrencyOne(cur);
    onChangeFieldOne(fieldOne);
  }

  useEffect(() => {
    getRate()
  }, [])


  useEffect(() => {
    onChangeFieldOne(fieldOne)
  }, [currencyOne])


  useEffect(() => {
    onChangeFieldTwo(fieldTwo)
  }, [currencyTwo])

  return (
    <div className="App">
      <div className='top'>
        {(rates) ? <Header rates={rates} /> : null}
      </div >
      <div className='bottop'>
        <Converter
          value={fieldOne}
          currency={currencyOne}
          onChangeCurrency={onChangeCurrencyOne}
          onChangeValue={onChangeFieldOne} />
        <Converter
          value={fieldTwo}
          currency={currencyTwo}
          onChangeCurrency={setCurrencyTwo}
          onChangeValue={onChangeFieldTwo} />
      </div >
    </div>
  );
}

export default App;
