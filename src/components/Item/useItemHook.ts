import { useCallback, useMemo } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  addSublist,
  moveItem,
  removeItem,
  removeSublist,
} from "../../store/slices/nestedListSlice";
import {
  Direction,
  ListItemType,
} from "../../store/slices/nestedListSlice.types";

export default function useItemHook(
  itemPath: string[],
  nestedList?: ListItemType[]
) {
  const dispatch = useAppDispatch();

  const isNestedListExist = useMemo(() => !!nestedList, [nestedList]);

  const onAddSublistClickHandler = useCallback(() => {
    dispatch(addSublist({ path: itemPath }));
  }, [dispatch, itemPath]);

  const onRemoveSublistClickHandler = useCallback(() => {
    dispatch(removeSublist({ path: itemPath }));
  }, [dispatch, itemPath]);

  const onRemoveItemClickHandler = useCallback(() => {
    dispatch(removeItem({ path: itemPath }));
  }, [dispatch, itemPath]);

  const onMoveItemClickHandler = useCallback(
    (direction: Direction) => () => {
      console.log(itemPath);
      dispatch(moveItem({ path: itemPath, direction }));
    },
    [dispatch, itemPath]
  );

  return {
    isNestedListExist,
    actions: {
      onAddSublistClickHandler,
      onRemoveSublistClickHandler,
      onRemoveItemClickHandler,
      onMoveItemClickHandler,
    },
  };
}
