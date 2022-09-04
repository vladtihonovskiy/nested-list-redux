import React, { useMemo } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IItemProps from "./Item.types";
import List from "../List/List";
import { MoveDirection } from "../../store/slices/nestedListSlice.types";
import useItemHook from "./useItemHook";
import styles from "./Item.module.css";


export const Item: React.FC<IItemProps> = ({
  value,
  isFirstItem,
  isLastItem,
  nestedList,
  itemPath,
}) => {
  const { actions, isNestedListExist } = useItemHook(itemPath, nestedList);

  /** render nested list if exist * */
  const renderNestedList = useMemo(() => {
    if (nestedList) {
      return <List list={nestedList} path={[...itemPath, "nestedList"]} />;
    }
    return null;
  }, [nestedList, itemPath]);

  const renderUpButton = useMemo(() => {
    if (isFirstItem) return null;

    return (
      <Button
        color="info"
        variant="contained"
        size="small"
        onClick={actions.onMoveItemClickHandler(MoveDirection.Up)}
      >
        <ArrowUpwardIcon />
      </Button>
    );
  }, [isFirstItem, actions]);

  const renderDownButton = useMemo(() => {
    if (isLastItem) return null;

    return (
      <Button
        color="info"
        variant="contained"
        size="small"
        onClick={actions.onMoveItemClickHandler(MoveDirection.Down)}
      >
        <ArrowDownwardIcon />
      </Button>
    );
  }, [isLastItem, actions]);

  const renderAddSublistButton = useMemo(() => {
    if (isNestedListExist) return null;

    return (
      <Button
        color="success"
        variant="contained"
        size="small"
        onClick={actions.onAddSublistClickHandler}
      >
        Add Sublist
      </Button>
    );
  }, [isNestedListExist, actions]);

  const renderRemoveSublistButton = useMemo(() => {
    if (!isNestedListExist) return null;

    return (
      <Button
        color="warning"
        variant="contained"
        size="small"
        onClick={actions.onRemoveSublistClickHandler}
      >
        Remove Sublist
      </Button>
    );
  }, [isNestedListExist, actions]);

  return (
    <li className={styles.itemContainer}>
      <Typography display="inline">{value}</Typography>
      {renderUpButton}

      {renderDownButton}

      {renderAddSublistButton}

      {renderRemoveSublistButton}

      <Button
        color="error"
        variant="contained"
        size="small"
        onClick={actions.onRemoveItemClickHandler}
      >
        Remove
      </Button>
      {renderNestedList}
    </li>
  );
};

export default Item;
