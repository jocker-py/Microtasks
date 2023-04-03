import React, {FC} from "react";

type ButtonType = {
  name: string;
  callback: () => void;
}
export const Button: FC<ButtonType> = ({name, callback}) => {
  return (
    <button onClick={callback}>{name}</button>
  );
};
