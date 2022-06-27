import Link from "next/link";
import style from "../styles/header.module.css";

const CTA = () => {
  return (
    <div className={style.cta}>
      <a href="./assets/cv.pdf" download className="btn">
        Download Resume
      </a>
      <Link href="/blog">
      <a className="btn btn-primary">
        See My Blogs
      </a>
      </Link>
    </div>
  );
};

export default CTA;
