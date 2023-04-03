import React, { useState } from "react";
import "./App.css";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
// import {FullInput} from "./components/FullInput";

type MessageType = {
  message: string;
}

function App() {
  const data: Array<MessageType> = [
    {message: "message1"},
    {message: "message2"},
    {message: "message3"},
  ];
  const [messages, setMessages] = useState<Array<MessageType>>(data);
  const [text, setText] = useState<string>('');
  // const addMessage = (text: string) => {
  //   const newMessage: MessageType = {message: text};
  //   setMessages([newMessage, ...messages]);
  // }
  const changeText = (text:string) => {
    setText(text);
  }
  const addMessage = () => {
    const newMessage = {message:text};
    setMessages([newMessage, ...messages]);
    setText('');
  }

  return (
    <div className="App">
      {/*<FullInput callback={addMessage} />*/}
      <Input value={text} callback={changeText}/>
      <Button name={"+"} callback={addMessage}/>
      {
        messages.map((item: MessageType, idx) => {
          return (<div key={idx}>{item.message}</div>)
        })
      }
    </div>
  );
}

export default App;
