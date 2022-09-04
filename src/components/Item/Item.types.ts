import { ListItemType } from "../../store/slices/nestedListSlice.types";

export default interface IItemProps {
  id: string;
  value: string;
  nestedList?: ListItemType[];
  isFirstItem: boolean;
  isLastItem: boolean;
  index: number;
  itemPath: string[];
}
