import React, { useMemo } from "react";
import IItemProps from "./Item.types";
import List from "../List/List";

export const Item: React.FC<IItemProps> = ({ value, isFirstItem, nestedList, itemPath }) => {
  const renderNestedList = useMemo(() => {
    if (nestedList) {
      return <List list={nestedList} path={[...itemPath, 'nestedList']} />;
    }
    return null;
  }, []);

  return (
    <li>
      <span>{value}</span>
      { !isFirstItem && <button>Up</button>}
      <button>Down</button>
      <button>Add Sublist</button>
      <button>Remove</button>
      {renderNestedList}
    </li>
  );
};

export default Item;
