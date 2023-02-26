import cross from "../assets/cross.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <div>我的書櫃</div>
        <div className={classes["cross-box"]}>
          <img src={cross} className={classes.cross} alt="cross" />
        </div>
      </div>
    </div>
  );
}

export default Header;
