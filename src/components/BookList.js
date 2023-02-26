import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store/books-action";
import BookItem from "./BookItem";
import classes from "./BookList.module.css";
import { useSelector } from "react-redux";

function BookLists() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (books.error) {
    return <p className="center">{books.error}</p>;
  }

  return (
    <div className={classes["book-box"]}>
      {books.items.map((item) => (
        <BookItem key={item.uuid} item={item} />
      ))}
    </div>
  );
}

export default BookLists;
