export enum Direction {
  Up = "UP",
  Down = "DOWN",
}

export interface ListItemType {
  id: string;
  value: string;
  nestedList?: ListItemType[] | null;
}

export interface NestedListState {
  nestedList: ListItemType[];
}

export interface AddNewItemPayload {
  path: string[];
  value: string;
}

export interface AddNewSublistPayload {
  path: string[];
}

export interface RemoveSublistPayload {
  path: string[];
}

export interface RemoveItemPayload {
  path: string[];
}

export interface MoveItemPayload {
  path: string[];
  direction: Direction;
}
