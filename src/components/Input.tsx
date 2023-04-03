import React, {FC} from "react";

type InputType = {
  value: string,
  callback: (text:string) => void
}
export const Input: FC<InputType> = ({value, callback}) => {
  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    callback(text);
  }
  return (
    <input value={value} onChange={changeMessage}/>
  );
};
