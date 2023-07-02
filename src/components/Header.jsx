import styles from "./Header.module.scss";
import logo from "../assets/images/cookchef.png";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars fa-xl mr-15"></i>
      <div className="flex-fill">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-basket-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Header;
