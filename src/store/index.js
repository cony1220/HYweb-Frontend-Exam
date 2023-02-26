import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books-slice";

const store = configureStore({
  reducer: { books: booksReducer },
});

export default store;
