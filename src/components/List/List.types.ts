import { ListItemType } from "../../store/slices/nestedListSlice.types";

export default interface IListProps {
  list?: ListItemType[];
  path?: string[];
}
