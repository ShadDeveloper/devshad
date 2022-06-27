import style from "../styles/experience.module.css";
import VerifiedIcon from '@mui/icons-material/Verified';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Hav</h5>
      <h2>My Experience</h2>

      <div className="container">
      <div className={style.experience__container}>
        {/* Frontend */}
        <div className={style.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={style.experience__content}>
            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>JavScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div className={style.experience__backend}>
          <h3>Backend Development</h3>
          <div className={style.experience__content}>
            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>MySQL Js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className={style.experience__details}>
              <VerifiedIcon fontSize="small" className={style.experience__detailsIcon} />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;
