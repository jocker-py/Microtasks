import React, {FC} from 'react';
import {BanknotsType, MoneyType} from "../../App";

type NewComponentType = {
  money: Array<MoneyType>;
  callback: (value: BanknotsType) => void;
}

export const NewComponent: FC<NewComponentType> = ({money, callback}) => {
  return (
    <>
      {
        money.map((item, index) => {
          return <li key={index}>
            <span> {item.banknots} </span>
            <span> {item.value} </span>
            <span> {item.number} </span>
          </li>
        })
      }
      <div>
        <button onClick={() => callback('all')}>All</button>
        <button onClick={() => callback('Dollars')}>Dollars</button>
        <button onClick={() => callback('RUBLS')}>Rubls</button>
      </div>
    </>
  );
};