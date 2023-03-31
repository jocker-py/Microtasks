import React from 'react';
import './App.css';
import {Button} from "./components/Button/Button";

function App() {
  const ButtonFoo = (...args:Array<string|number>) => {
    args.length ? console.log(...args): console.log("I'm stupid button");
  }
  return (
    <div className="App">
      <Button name={"MyYouTubeChanel - 1"} callback={() => ButtonFoo("I'm Vlad", 27, 'Live in Ostrovec')}/>
      <Button name={"MyYouTubeChanel - 2"} callback={() => ButtonFoo("I'm Max")}/>
      <Button name={"Stupid button"} callback={() => ButtonFoo()}/>
    </div>
  );
}

export default App;
