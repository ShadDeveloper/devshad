import style from "../styles/header.module.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header className={style.header}>
    <div className="container">
      <div className={style.header__container}>
        <h5>Hello I'm</h5>
        <h1>Shad Khan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className={style.me}>
          <img src="./assets/me.png" />
        </div>

        <a href="#about" className={style.scroll__down}>
          Scroll Down
        </a>
      </div>
      </div>
    </header>
  );
};

export default Header;
