import style from "../styles/services.module.css";
import CheckIcon from '@mui/icons-material/Check';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container">
      <div className={style.services__container}>
        {/* UI/UX */}
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>UI/UX Design</h3>
          </div>

          <ul className={style.service__list}>
            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>Web Developmet</h3>
          </div>

          <ul className={style.service__list}>
            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* Content Creation */}
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>Content Creation</h3>
          </div>

          <ul className={style.service__list}>
            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <CheckIcon fontSize="small" className={style.service__listIcon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
      </div>
    </section>
  );
};

export default Services;
