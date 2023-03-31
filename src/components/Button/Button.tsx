import React, {FC} from 'react';

type ButtonType = {
  name: string,
  callback: () => void;
}

export const Button: FC<ButtonType> = ({name, callback}) => {
  const onClickHandler = () => {
    callback();
  }
  return (
    <button onClick={onClickHandler}>{name}</button>
  );
};
