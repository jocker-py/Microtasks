import React from 'react';

type CarType = {
  manufacturer: string;
  model: string;
}

const NewComponent = () => {
  const topCars: Array<CarType> = [
    {manufacturer: 'BMW', model: 'X5'},
    {manufacturer: 'Mersedes', model: 'MLS'},
    {manufacturer: 'Audi', model: 'Q7'}
  ]
  const getKeys = (obj: CarType) => Object.keys(obj);
  const getAllKeys = (arr: Array<CarType>) => arr.map(obj => getKeys(obj));
  const getUniqueKeys = (arr: Array<CarType>) => Array.from(new Set(getAllKeys(arr).flat()));
  const tableHeadElements = (
    <tr>
      {getUniqueKeys(topCars).map((head, idx) => <th key={idx + 1}>{head}</th>)}
    </tr>)
  const tableBodyElements = topCars.map((car, idx) => (
    <tr key={idx + 1}>
      <td>{car.manufacturer}</td>
      <td>{car.model}</td>
    </tr>
  ))
  return (
    <table>
      <thead>
      {tableHeadElements}
      </thead>
      <tbody>
      {tableBodyElements}
      </tbody>

    </table>
  );
};

export default NewComponent;