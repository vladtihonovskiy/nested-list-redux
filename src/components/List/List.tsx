import React from "react";
import IListProps from "./List.types";
import { useAppSelector } from "../../hooks/useAppSelector";
import Item from "../Item/Item";
import { AddInput } from "../AddInput/AddInput";

export const List: React.FC<IListProps> = ({ list, path }: IListProps) => {
  const lisaArray =
    list || useAppSelector((state) => state.nestedList.nestedList);

  const pathToParentArray = path || ["0"];

  return (
    <>
      <ul>
        {lisaArray.map(({ id, value, nestedList }, index) => (
          <Item
            key={id}
            id={id}
            value={value}
            nestedList={nestedList}
            itemPath={[...pathToParentArray, index.toString()]}
            isFirstItem={index === 0}
            index={index}
          />
        ))}
        <li>
          <AddInput onAddClick={() => {}} />
        </li>
      </ul>
    </>
  );
};

export default List;
