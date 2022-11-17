import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {courenciesActions} from "../../redux";
import {Courensy} from "../Courency/Courensy";

import './Courencies.scss'

const Courencies: FC = () => {

  const [sum1, setSum1] = useState<number>(1)
  const [sum2, setSum2] = useState<number>(1)
  const [currency1, setCurrency1] = useState<string>('USD')
  const [currency2, setCurrency2] = useState<string>('UAH')

  const dispatch = useAppDispatch()
  const {response, loading} = useAppSelector(state => state.courenciesReducer)

  const keys: string[] = Object.keys(response)
  const values: number[] = Object.values(response)

  useEffect(() => {
    dispatch(courenciesActions.getCourencies())
  }, [dispatch])


  useEffect(() => {
    if (!!response) {
      const initialValue = () => {
        handleSum1Change(1)
      }
      initialValue()
    }
  }, [response])

  function handleSum1Change(sum1: number) {
    setSum2(+(sum1 * response[currency2 as keyof typeof response] / response[currency1 as keyof typeof response]).toFixed(2));
    setSum1(sum1);
  }

  const handleCurrency1Change = (currency1: string) => {
    setSum2(+(sum1 * response[currency2 as keyof typeof response] / response[currency1 as keyof typeof response]).toFixed(2));
    setCurrency1(currency1);
  }

  const handleSum2Change = (sum2: number) => {
    setSum2(+(sum2 * response[currency1 as keyof typeof response] / response[currency2 as keyof typeof response]).toFixed(2));
    setSum2(sum2);
  }

  const handleCurrency2Change = (currency2: string) => {
    setSum1(+(sum2 * response[currency1 as keyof typeof response] / response[currency2 as keyof typeof response]).toFixed(2));
    setCurrency2(currency2);
  }

  const switchCurrencies = () => {
    setCurrency1(currency2)
    setCurrency2(currency1)
    setSum1(sum2)
    setSum2(sum1)
  }

  return (<div className={'wrapper'}>
      {loading
        ? (<div className={'spinner'}>
            <span className="spinner__loader"></span>
          </div>)
        : (<div className={'convertor'}>
          <header><h1>ITop1000 Converter</h1></header>
          <form className={'currencies'}>
            <Courensy
              curencies={keys}
              sum={sum1}
              currency={currency1}
              onSumChange={handleSum1Change}
              onCurrencyChange={handleCurrency1Change}
            />
            <Courensy
              curencies={keys}
              sum={sum2}
              currency={currency2}
              onSumChange={handleSum2Change}
              onCurrencyChange={handleCurrency2Change}
            />
            <button className={'currencies__switch'} onClick={(e) => {
              e.preventDefault()
              switchCurrencies()
            }}>switch
            </button>
          </form>
        </div>)}

    </div>
  );
};

export {Courencies};