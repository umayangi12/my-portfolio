import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      <section className="skills" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Header</h2>
                <p1>
                  sjfjsd jifsdfn sfdfdkf jsdfdkfsdf sdfkdfjsd jsfdsdsfj
                  dfkdjsfksdfj fjsdkfjsdk jfksdjf ksfjefef sdfjsdkfjfksdjfsdk
                  jkfdskfj jsfjfk jksd
                </p1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}