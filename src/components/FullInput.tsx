import React, {FC, useState} from "react";

type FullInputType = {
  callback: (text:string) => void;
}
export const FullInput: FC<FullInputType> = ({callback}) => {
  const [text, setText] = useState<string>("");
  const onClick = () => {
    callback(text);
    setText("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setText(text);
  };
  return (
    <div>
      <input value={text} onChange={onChange}/>
      <button onClick={onClick}>+</button>
    </div>
  );
};
