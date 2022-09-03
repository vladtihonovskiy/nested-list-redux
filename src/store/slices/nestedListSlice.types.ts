export interface ListItemType {
  id: string;
  value: string;
  nestedList?: ListItemType[];
}

export interface NestedListState {
  nestedList: ListItemType[];
}
