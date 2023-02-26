import { useState } from "react";

import classes from "./BookItem.module.css";
import islikedicon from "../assets/isliked.png";
import nonlikedicon from "../assets/nonliked.png";

function BookItem(props) {
  const [isLiked, setIsLiked] = useState(false);
  const toggleisLiked = () => {
    setIsLiked((pre) => !pre);
  };
  
  return (
    <div className={classes["book-box"]}>
      <div className={classes.cover}>
        <img src={props.item.coverUrl} alt={props.item.title} />
      </div>
      <div onClick={toggleisLiked} className={classes["icon-box"]}>
        <img
          src={isLiked ? islikedicon : nonlikedicon}
          className={classes.icon}
          alt="like"
        />
      </div>
      <div className={classes.title}>{props.item.title}</div>
    </div>
  );
}

export default BookItem;
