import React, { useCallback, useState } from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IAddInputProps from "./AddInpu.types";
import styles from "./AddItem.module.css";

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
    <div className={styles.container}>
      <TextField
        value={inputValue}
        onChange={onInputChangeHandler}
        type="text"
        label="Item Name"
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        disabled={isButtonDisabled}
        onClick={onSubmitButtonClick}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default React.memo(AddInput);
