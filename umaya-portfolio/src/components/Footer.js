import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} style={{ marginTop: "40px" }}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end"
            style={{ marginTop: "40px" }}
          >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/indrachapa-ekanayake">
                <img src={NavIcon1} alt="LinkenIn" />
              </a>
              <a href="https://www.facebook.com/umaya.ekanayake.7?mibextid=ZbWKwL">
                <img src={NavIcon2} alt="facebook" />
              </a>
              <a href="https://medium.com/@umayangi1999">
                <img src={NavIcon3} alt="medium" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
