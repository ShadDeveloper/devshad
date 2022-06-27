import style from "../styles/header.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const HeaderSocial = () => {
  return (
    <div className={style.header__social}>
      <a href="https://twitter.com/dev_shad" target="_blank" rel="noreferrer">
        <TwitterIcon fontSize="small" />
      </a>
      <a href="https://github.com/ShadDeveloper" target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="small" />
      </a>
      <a href="https://instagram.com/dev_shad" target="_blank" rel="noreferrer">
        <InstagramIcon fontSize="small" />
      </a>
    </div>
  );
};

export default HeaderSocial;
