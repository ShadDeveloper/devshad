import style from "../styles/footer.module.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="" className={style.footer__logo}>
        Shad Khan
      </a>

      <ul className={style.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Conatct</a>
        </li>
      </ul>

      <div className={style.footer__socials}>
        <a href="https://facebook.com/MdShadKhanFF" target="_blank" rel="noreferrer">
          <FacebookOutlinedIcon fontSize="small" />
        </a>
        <a href="https://instagram.com/dev_shad" target="_blank" rel="noreferrer">
          <InstagramIcon fontSize="small" />
        </a>
        <a href="https://twitter.com/dev_shad" target="_blank" rel="noreferrer">
          <TwitterIcon fontSize="small" />
        </a>
      </div>

      <div className={style.footer__copyright}>
        <small>&copy; Shad Khan. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
