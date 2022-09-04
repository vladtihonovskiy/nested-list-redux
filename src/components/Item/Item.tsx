import React, { useMemo } from "react";
import IItemProps from "./Item.types";
import List from "../List/List";
import { Direction } from "../../store/slices/nestedListSlice.types";
import useItemHook from "./useItemHook";

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
      <button onClick={actions.onMoveItemClickHandler(Direction.Up)}>Up</button>
    );
  }, [isFirstItem, actions]);

  const renderDownButton = useMemo(() => {
    if (isLastItem) return null;

    return (
      <button onClick={actions.onMoveItemClickHandler(Direction.Down)}>
        Down
      </button>
    );
  }, [isLastItem, actions]);

  const renderAddSublistButton = useMemo(() => {
    if (isNestedListExist) return null;

    return (
      <button onClick={actions.onAddSublistClickHandler}>Add Sublist</button>
    );
  }, [isNestedListExist, actions]);

  const renderRemoveSublistButton = useMemo(() => {
    if (!isNestedListExist) return null;

    return (
      <button onClick={actions.onRemoveSublistClickHandler}>
        Remove Sublist
      </button>
    );
  }, [isNestedListExist, actions]);

  return (
    <li>
      <span>{value}</span>
      {renderUpButton}

      {renderDownButton}

      {renderAddSublistButton}

      {renderRemoveSublistButton}

      <button onClick={actions.onRemoveItemClickHandler}>Remove</button>
      {renderNestedList}
    </li>
  );
};

export default Item;
