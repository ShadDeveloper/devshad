import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
// import '../../node_modules/blog-css/styles.css';
import style from "../../styles/blog.module.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function postDetail() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const res = await fetch(`https://shad-blog.herokuapp.com/blog/${id}`);
      setPost(await res.json());
      setLoading(false);
    };

    getPost();
  }, []);

  //   Loading Screen

  const Loading = () => {
    return (
      <>
        <div className={style.loading}>
          <div className="loader">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="load one" cx="60" cy="60" r="40" />
              <circle className="load two" cx="60" cy="60" r="40" />
              <circle className="load three" cx="60" cy="60" r="40" />
              <g>
                <circle className="point one" cx="45" cy="70" r="5" />
                <circle className="point two" cx="60" cy="70" r="5" />
                <circle className="point three" cx="75" cy="70" r="5" />
              </g>
            </svg>
          </div>
        </div>
      </>
    );
  };

  //   Post Detail

  const Post = () => {
    return (
      <>
        {/* author details */}

        <div className={style.author}>
          <IconButton
            className={style.backButton}
            onClick={() => router.push("/blog")}
          >
            <ArrowBackIcon />
          </IconButton>
          <img src={post.profileImg} alt="" />
          <span>{post.profileName}</span>
          <p>{post.date}</p>
        </div>
        {/* post details */}

        <div className={style.postDetail}>
          <h1>{post.title}</h1>
          <span>{post.description}</span>
          <img src={post.img} alt="" />
          <p>{post.longDesc}</p>
          <hr />
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Blog | Dev Shad</title>
      </Head>

      <div className={style.postMain}>
        {/* NavBar */}
        <div className={style.navbaar}>
          <Link href="/">
            <a className={style.logo}>
              Dev <span>Shad</span>
            </a>
          </Link>
          <Link href="/#contact">
            <a className={style.contact}>Contact Me</a>
          </Link>
        </div>

        <div>{loading ? <Loading /> : <Post />}</div>
      </div>
    </>
  );
}

export default postDetail;
