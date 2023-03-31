import React, {useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const increment = () => setNumber(number + 1);
  const reset = () => setNumber(0);
  const decrement = () => setNumber(number - 1);
  return (
    <div className="App">
      <h3>{number}</h3>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
