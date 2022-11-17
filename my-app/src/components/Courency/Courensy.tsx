import React, {FC} from 'react';
import './Currency.scss'

interface IProps {
  curencies: string[]
  sum: number
  currency: string
  onSumChange: (val: number) => void
  onCurrencyChange: (val: string) => void
}

const Courensy: FC<IProps> = ({curencies, sum, currency, onSumChange, onCurrencyChange}) => {
  return (
    <div>
      <div className="currency">
        <input type="text" value={sum} onChange={ev => onSumChange(+ev.target.value)}/>
        <select value={currency} onChange={ev => onCurrencyChange(ev.target.value)}>
          {curencies.map((currency, index) => (
              <option key={index} value={currency}>{currency}</option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export {Courensy};