import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: { items: [], status: 'idle', error: null },
  reducers: {
    replacebooks(state, action) {
      state.items = action.payload.items;
      state.status = action.payload.status;
      state.error = action.payload.error;
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
