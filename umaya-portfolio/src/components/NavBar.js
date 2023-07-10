import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/umayaLogo2.png";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";
import NavIcon4 from "../assets/img/nav-icon4.svg";

export const NavBar = () => {
  const [link, setLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateLink = (value) => {
    setLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{
                fontWeight: 400,
                color: link === "home" ? "gold" : "#ffffff",
                letterSpacing: "0.8px",
                padding: "0 25px",
                fontSize: 18,
                opacity: 0.75,
              }}
              onClick={() => onUpdateLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{
                fontWeight: 400,
                color: link === "skills" ? "gold" : "#ffffff",
                letterSpacing: "0.8px",
                padding: "0 25px",
                fontSize: 18,
                opacity: 0.75,
              }}
              onClick={() => onUpdateLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{
                fontWeight: 400,
                color: link === "projects" ? "gold" : "#ffffff",
                letterSpacing: "0.8px",
                padding: "0 25px",
                fontSize: 18,
                opacity: 0.75,
              }}
              onClick={() => onUpdateLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
              <a href="https://github.com/umayangi12">
                <img src={NavIcon4} alt="github" />
              </a>
            </div>
            <a href="#connect">
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
