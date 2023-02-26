import { booksActions } from "./books-slice";

export const fetchBooks = () => async (dispatch) => {
  dispatch(
    booksActions.replacebooks({
      items: [],
      status: "loading",
      error: null,
    })
  );

  const fetchData = async () => {
    const response = await fetch("https://cony1220.github.io/data/books.json");

    if (!response.ok) {
      throw new Error("Could not fetch data!");
    }

    const data = await response.json();

    return data;
  };

  try {
    const data = await fetchData();
    dispatch(
      booksActions.replacebooks({
        items: data || [],
        status: "succeed",
        error: null,
      })
    );
  } catch (error) {
    dispatch(
      booksActions.replacebooks({
        items: [],
        status: "failed",
        error: error.message,
      })
    );
  }
};
