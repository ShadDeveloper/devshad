import style from "../styles/portfolio.module.css";

const Portfolio = () => {
 
  // Portfolio Data Array

  const callouts = [
    {
      id: 1,
      image: "./assets/portfolio1.jpg",
      title: "Crypto Currency & Financial Visualization",
      github: "https://github.com",
      demo: "hhtps://dribble.com/shots/16673175-Crypto-currency-dashboards-and-financial-data-visualization",
    },
    {
      id: 2,
      image: "./assets/portfolio2.jpg",
      title: "Charts templete & infographis in Figma",
      github: "https://github.com",
      demo: "hhtps://dribble.com/shots/16673175-Crypto-currency-dashboards-and-financial-data-visualization",
    },
    {
      id: 3,
      image: "./assets/portfolio3.jpg",
      title: "Figma dashboard UI kit for data dasign web apps",
      github: "https://github.com",
      demo: "hhtps://dribble.com/shots/16673175-Crypto-currency-dashboards-and-financial-data-visualization",
    },
    {
      id: 4,
      image: "./assets/portfolio4.jpg",
      title: "Maintaining tasks and tracking progress",
      github: "https://github.com",
      demo: "hhtps://dribble.com/shots/16673175-Crypto-currency-dashboards-and-financial-data-visualization",
    },
    {
      id: 5,
      image: "./assets/portfolio5.png",
      title: "Charts templetes & infographics in Figma",
      github: "https://github.com",
      demo: "hhtps://dribble.com/shots/16673175-Crypto-currency-dashboards-and-financial-data-visualization",
    },
    {
      id: 6,
      image: "./assets/portfolio6.jpg",
      title: "Maintaining tasks and tracking progress",
      github: "https://github.com",
      demo: "hhtps://dribble.com/shots/16673175-Crypto-currency-dashboards-and-financial-data-visualization",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container">
      <div className={style.portfolio__container}>
        {callouts.map((callout) => (
          <article key={callout.id} className={style.portfolio__item}>
            <div className={style.portfolio__itemImage}>
              <img src={callout.image} alt={callout.title} />
            </div>
            <h3>{callout.title}</h3>
            <div className={style.portfolio__itemCta}>
              <a href={callout.github} target="_blank" rel="noreferrer" className="btn">
                Github
              </a>
              <a
                href={callout.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
