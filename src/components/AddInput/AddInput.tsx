import React, { useCallback, useState } from "react";
import IAddInputProps from "./AddInpu.types";

export const AddInput: React.FC<IAddInputProps> = ({
  onAddClick,
}: IAddInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmitButtonClick = useCallback(() => {
    onAddClick(inputValue);
    setInputValue("");
  }, [inputValue]);

  const isButtonDisabled = inputValue.trim().length < 3;

  return (
    <div>
      <input value={inputValue} onChange={onInputChangeHandler} type="text" />
      <button disabled={isButtonDisabled} onClick={onSubmitButtonClick}>
        Add
      </button>
    </div>
  );
};

export default React.memo(AddInput);
