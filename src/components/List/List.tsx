import React, { useCallback, useMemo } from "react";
import IListProps from "./List.types";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AddInput } from "../AddInput/AddInput";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Item from "../Item/Item";
import { addNewItem } from "../../store/slices/nestedListSlice";

export const List: React.FC<IListProps> = ({ list, path }: IListProps) => {
  const dispatch = useAppDispatch();
  const lisaArray =
    list || useAppSelector((state) => state.nestedList.nestedList);

  const pathToParentArray = useMemo(() => path || [], [path]);

  const onAddClick = useCallback(
    (text: string) => {
      dispatch(addNewItem({ value: text, path: pathToParentArray }));
    },
    [dispatch, pathToParentArray]
  );

  return (
    <>
      <ul>
        {lisaArray.map(({ id, value, nestedList }, index) => (
          <Item
            key={id}
            id={id}
            value={value}
            nestedList={nestedList as []}
            itemPath={[...pathToParentArray, index.toString()]}
            isFirstItem={index === 0}
            isLastItem={index === lisaArray.length - 1}
            index={index}
          />
        ))}
        <li>
          <AddInput onAddClick={onAddClick} />
        </li>
      </ul>
    </>
  );
};

export default List;
