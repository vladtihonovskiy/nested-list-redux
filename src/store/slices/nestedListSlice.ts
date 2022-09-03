import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { NestedListState } from "./nestedListSlice.types";

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
    addNewPlayerName: (state, action: PayloadAction<string>) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewPlayerName } = nestedListSlice.actions;

export default nestedListSlice.reducer;
