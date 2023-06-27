import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Express JS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Vue JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Github</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>
                Co - Curricular Activities{" "}
              </h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Vice President in AIESEC</h5>
                </div>
                <div className="item">
                  <h5>“ShilpaNavodha” inter-school handcraft tournament</h5>
                </div>
                <div className="item">
                  <h5>Age group Swimming Championship All Island</h5>
                </div>
                <div className="item">
                  <h5>
                    Central Province school’s swimming Championship (CEPASA)
                  </h5>
                </div>
                <div className="item">
                  <h5>
                    Pushpadana Girls’ college commemorative education exhibition
                    2017
                  </h5>
                </div>
                <div className="item">
                  <h5>
                    Pushpadana Girls’ college “KalaaUlela” Dancing Tournament
                    2013 and 2014
                  </h5>
                </div>
                <div className="item">
                  <h5>“Save our Rainforest” Art Competition 2015</h5>
                </div>
                <div className="item">
                  <h5>Organized annual Commerce Day for the term 2017-2018</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>Memberships </h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>
                    Member of the junior prefect court of the college in the
                    academic year 2009
                  </h5>
                </div>
                <div className="item">
                  <h5>Member of the Commerce Society 2017 - 2018</h5>
                </div>
                <div className="item">
                  <h5>Member of the college dancing group</h5>
                </div>
                <div className="item">
                  <h5>Member of the college swimming team</h5>
                </div>
                <div className="item">
                  <h5>Member of Sri Lanka Girl Guide Association</h5>
                </div>
                <div className="item">
                  <h5>Member of the Astronomical Society 2014 – 2015</h5>
                </div>
                <div className="item">
                  <h5>Member of the College ICT Club 2015 - 2016</h5>
                </div>
                <div className="item">
                  <h5>Member of the College Media Unit 2017- 2018</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
