import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const experience_list = [
    {
      image: "./src/1.png",
      title: "Credit Card Reporting and Approval Automation",
      description: "Work Related Task",
      card: {
        description:
          "Automation of Credit Card Transaction Reporting and Approvals",
        languages: ["Power App", "Power Automate", "Sharepoint"],
        link: "https://make.powerapps.com/environments/Default-cc121c66-05b0-4710-9f30-f0d9a02b347a/apps",
      },
    },
    {
      image: "./src/2.png",
      title: "DVD Rental Sample DB server",
      description: "Personal/Self-Learning",
      card: {
        description:
          "Create my own implementation of the popular sample database of postgreSQL",
        languages: ["Java", "Spring", "PostgreSQL"],
        link: "https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/",
      },
    },
    {
      image: "./src/3.png",
      title: "MERN Stack Training",
      description: "2 month online training",
      card: {
        description:
          "Undergo 2 month training covering from basic to complex web development topics to learning MERN.",
        languages: ["Html, VanillaJS, CSS", "MongoDB", "Express", "React"],
        link: "localhost",
      },
    },
    {
      image: "./src/4.png",
      title: "Skill Programming & Python for EDA Extensions",
      description: "Work Related",
      card: {
        description:
          "With APIs and built in language (SKILL) of ALLEGRO PCB Design, I created my own tools to automate my tasks",
        languages: ["SKILL", "AXLAPI", "Python"],
        link: "www.sample.com",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const trackRef = useRef(document.createElement("ul"));

  useEffect(() => {
    const slideWidth =
      trackRef.current.children[0].getBoundingClientRect().width;
    trackRef.current.style.transform = `translateX(-${
      slideWidth * currentIndex
    }px)`;
  }, [currentIndex]);

  const moveToNextSlide = () => {
    if (currentIndex < experience_list.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const moveToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="experience_main">
      <h1 className="exp_class">RELEVANT EXPERIENCES</h1>
      <div className="experience_container">
        <div className="carousel">
          <div className="carousel-track-container">
            <ul className="carousel-track" ref={trackRef}>
              {experience_list.map((ex, index) => (
                <li
                  key={index}
                  className={`carousel-slide ${
                    index === currentIndex ? "current-slide" : ""
                  }`}
                >
                  <img
                    className="carousel-image"
                    src={ex.image}
                    alt={`Slide ${index + 1}`}
                  />

                  <div className="summary">
                    <h1>{ex.title}</h1>
                    <h3 className="desc">{ex.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="carousel-button left-button"
            onClick={moveToPrevSlide}
          >
            &lt;
          </button>
          <button
            className="carousel-button right-button"
            onClick={moveToNextSlide}
          >
            &gt;
          </button>
        </div>
        <div className="experience_description">
          <h3 className="works">Project</h3>
          <h1 className="title_Ex">{experience_list[currentIndex].title}</h1>
          <p>{experience_list[currentIndex].card.description}</p>
          <div className="lang">
            <p>Languages</p>
            <ul>
              {experience_list[currentIndex].card.languages.map(
                (lang, index) => (
                  <li key={index}>{lang}</li>
                )
              )}
            </ul>
          </div>
          <label htmlFor="">
            <br />
            link:{" "}
          </label>
          <a
            href={experience_list[currentIndex].card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {experience_list[currentIndex].card.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
