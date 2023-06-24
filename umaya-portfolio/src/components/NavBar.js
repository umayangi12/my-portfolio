import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";

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
              <a href="#">
                <img src={NavIcon1} alt="" />
              </a>
              <a href="#">
                <img src={NavIcon2} alt="" />
              </a>
              <a href="#">
                <img src={NavIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
