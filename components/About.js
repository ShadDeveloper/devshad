import style from "../styles/about.module.css";
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';

const About = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>

      <div className="container">
      <div className={style.about__container}>
        <div className={style.about__me}>
          <div className={style.about__meImage}>
            <img src="./assets/me-about.jpg" />
          </div>
        </div>

        <div className={style.about__content}>
          <div className={style.about__cards}>
            <article className={style.about__card}>
              <WorkspacePremiumOutlinedIcon className={style.about__icon} />
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>

            <article className={style.about__card}>
              <PeopleOutlinedIcon className={style.about__icon} />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className={style.about__card}>
              <BackpackOutlinedIcon className={style.about__icon} />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ullam dolores aliquam officia tempore recusandae saepe quis?
            Voluptatibus placeat odit dolore natus dignissimos maxime ut sequi
            numquam nobis libero totan.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&lsquo;s Talk
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
