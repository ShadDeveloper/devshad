import Link from "next/link";
import { useState, useEffect } from "react";
import style from '../../styles/blog.module.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Main() {
  const [active, setActive] = useState("5");
  const [data, setData] = useState("");
  const [filter, setFilter] = useState([]);

  // Data fetch

     useEffect(() => {
         const getPost = async () => {
             const res = await fetch("https://shad-blog.herokuapp.com/blog");
             setData(await res.clone().json());
             setFilter(await res.json());
         };

         getPost();

     }, []);

    //  filter method

    const filterPost = (cate) => {
        const updatedPost = data.filter((x) => x.category === cate);
        setFilter(updatedPost);
    }

  const handleClick = () => {
    setActive("5");
    setFilter(data);
  };

  function filterA() {
    filterPost("Design");
    setActive("1");
  }

  function filterB() {
    filterPost("Tech");
    setActive("2");
  }

  function filterC() {
    filterPost("Mobile");
    setActive("3");
  }

  return (
    <>
      {/* NavBar */}
      <div className={style.main}>
        <div className={style.navbar}>
          <Link href="/">
            <a className={style.logo}>
              Dev <span>Shad</span>
            </a>
          </Link>
          <Link href="/#contact">
            <a className={style.contact}>Contact Me</a>
          </Link>
        </div>

        {/* page detail */}
        <div className={style.detail}>
          <h1>The Dev Shad Blog</h1>
          <p>Your source of great content</p>
        </div>

        {/* filter button */}
        <div className={style.filterButton}>
          <span
            id="5"
            className={active === "5" ? "activeFilter" : ""}
            onClick={handleClick}
          >
            All
          </span>
          <span
            id="1"
            name="Design"
            onClick={() => filterA()}
            className={active === "1" ? "activeFilter" : ""}
          >
            Design
          </span>
          <span
            id="2"
            name="Tech"
            onClick={() => filterB()}
            className={active === "2" ? "activeFilter" : ""}
          >
            Tech
          </span>
          <span
            id="3"
            name="Mobile"
            onClick={() => filterC()}
            className={active === "3" ? "activeFilter" : ""}
          >
            Mobile
          </span>
        </div>

        {/* post Item */}

        <div className={style.post}>
        {filter.map((post) => (
        <div className={style.postItem} key={post.id}>
            <img src={post.img} />
            <span>{post.category}</span>
            <h1><Link className="a" href={`/blog/${post.id}`}><a className="a">{post.title}</a></Link></h1>
            <h5>{post.date}</h5>
            <p>{post.description}</p>
            <div className={style.profile}>
            <img src={post.profileImg} />
            <span>{post.profileName}</span>
            </div>
        </div>
        ))}
        </div>

        <div className={style.footer}>
            <span>&#169; Copyright All Right Reserved</span>
            <div className={style.socialIcon}>
                <a href="https://facebook.com/MdShadKhanFF" target="_blank" className={style.icon}><FacebookOutlinedIcon fontSize="small" /></a>
                <a href="https://instagram.com/dev_shad" target="_blank" className={style.icon}><InstagramIcon fontSize="small" /></a>
                <a href="https://twitter.com/dev_shad" className={style.icon}><TwitterIcon fontSize="small" /></a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Main;
