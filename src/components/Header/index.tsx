import Button from "../Button";
import style from "./style.module.css";
const Header = () => {
  return (
    <header className={style.Header}>
      <div>
        <h1>StoreLangs</h1>
      </div>
      <nav>
        <Button text="Galeria" />
      </nav>
    </header>
  );
};

export default Header;
