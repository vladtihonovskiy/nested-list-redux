import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { get } from "lodash";
import {
  AddNewItemPayload,
  AddNewSublistPayload,
  Direction,
  MoveItemPayload,
  NestedListState,
  RemoveItemPayload,
  RemoveSublistPayload,
} from "./nestedListSlice.types";
import { arrayMoveElementByIndexWithImmer } from "../../utils/intex";

const defaultNestedList = [
  { id: uuidv4(), value: "Coffee" },
  {
    id: uuidv4(),
    value: "Tea",
    nestedList: [
      { id: uuidv4(), value: "Black Tea" },
      { id: uuidv4(), value: "Green Tea" },
    ],
  },
  { id: uuidv4(), value: "Milk", nestedList: [] },
];

const initialState: NestedListState = {
  nestedList: defaultNestedList,
};

export const nestedListSlice = createSlice({
  name: "nestedList",
  initialState,
  reducers: {
    addNewItem: (state, action: PayloadAction<AddNewItemPayload>) => {
      const { path, value } = action.payload;
      if (path.length) {
        const parentList = get(state.nestedList, path);
        parentList.push({
          id: uuidv4(),
          value,
        });
        return;
      }
      state.nestedList.push({
        id: uuidv4(),
        value,
      });
    },
    addSublist: (state, action: PayloadAction<AddNewSublistPayload>) => {
      const { path } = action.payload;
      if (path.length) {
        const parentList = get(state.nestedList, path);
        parentList.nestedList = [];
      }
    },
    removeSublist: (state, action: PayloadAction<RemoveSublistPayload>) => {
      const { path } = action.payload;
      if (path.length) {
        const parentList = get(state.nestedList, path);
        parentList.nestedList = null;
      }
    },
    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      const { path } = action.payload;
      const pathLength = path.length;
      /** in case if this is top level of array * */
      if (pathLength === 1) {
        state.nestedList.splice(+path, 1);
        return;
      }
      const pathWithoutLastElement = path.slice(0, -1);
      const lastElement = path[pathLength - 1];

      const parentList = get(state.nestedList, pathWithoutLastElement);
      parentList.splice(+lastElement, 1);
    },
    moveItem: (state, action: PayloadAction<MoveItemPayload>) => {
      const { path, direction } = action.payload;
      const pathLength = path.length;

      const currentIndex = path[pathLength - 1];
      const moveDirection = direction === Direction.Up ? -1 : +1;
      const nextIndex = +currentIndex + moveDirection;

      /** in case if this is top level of array * */
      if (pathLength === 1) {
        state.nestedList = arrayMoveElementByIndexWithImmer(
          state.nestedList,
          +currentIndex,
          nextIndex
        );
        return;
      }

      console.log("path ===", path);
      const pathWithoutLastElement = path.slice(0, -1);
      arrayMoveElementByIndexWithImmer(
        get(state.nestedList, pathWithoutLastElement),
        +currentIndex,
        nextIndex
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewItem, addSublist, removeSublist, removeItem, moveItem } =
  nestedListSlice.actions;

export default nestedListSlice.reducer;
