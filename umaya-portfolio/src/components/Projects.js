import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "exexex",
      description: "fsfdfs",
      imgUrl: projImg1,
      gitHubUrl: "",
    },
    {
      title: "exexex",
      description: "fsfdfs",
      imgUrl: projImg2,
      gitHubUrl: "",
    },
    {
      title: "exexex",
      description: "fsfdfs",
      imgUrl: projImg3,
      gitHubUrl: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Academic Projects</h2>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActivekey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 01</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 02</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 03</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row style={{ marginTop: "40px" }}>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">dfdsfdsf</Tab.Pane>
                <Tab.Pane eventKey="third">dffsd</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
