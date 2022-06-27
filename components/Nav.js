import { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <HomeOutlinedIcon fontSize="small" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <PersonRoundedIcon fontSize="small" />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MenuBookIcon fontSize="small" />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <WorkOutlineIcon fontSize="small" />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MailOutlineIcon fontSize="small" />
      </a>
    </nav>
  );
};

export default Nav;
