import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./component/NewComponent/NewComponent";

export type BanknotsType = 'all' | 'RUBLS' | 'Dollars';
export type MoneyType = {
  banknots: BanknotsType,
  value: number,
  number: string,
}

function App() {
  const [money, setMoney] = useState<Array<MoneyType>>([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])
  const [currentFilter, setCurrentFilter] = useState<BanknotsType>('all');
  const onClickHandler = (value: BanknotsType) => setCurrentFilter(value);
  const filterByBanknot = (item: MoneyType) => currentFilter === 'all' ? true : item.banknots === currentFilter;
  const filteredMoney = money.filter(filterByBanknot);
  return (
    <ul className="App">
      <NewComponent money={filteredMoney} callback={onClickHandler}/>
    </ul>
  );
}

export default App;
