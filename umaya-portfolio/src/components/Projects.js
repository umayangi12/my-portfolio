import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/mernProject.jpg";
import projImg2 from "../assets/img/mobileApp.jpg";
import projImg3 from "../assets/img/clothingStore.jpg";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title:
        "MERN STACK - COMPLETE APPLICATION (MONGODB, EXPRESS, REACT, NODE JS)",
      description:
        "Created a web-based Management System with a team of 8, that assists managers and other authorized employees to handle and administrate the necessary workflow of a well-known Cargo Delivery Company in Sri Lanka.",
      imgUrl: projImg1,
      gitHubUrl:
        "https://github.com/SLIIT-FacultyOfComputing/itp_project-itp2021_s2_b01_g13.git",
    },
    {
      title: "HEALTH CARE APP USING ANDROID STUDIO AND MONGODB",
      description:
        "Designed and created a Healthcare Management System using React Native, that has functionalities like patient management, doctor management and pharmact management",
      imgUrl: projImg2,
      gitHubUrl:
        "https://github.com/SLIIT-FacultyOfComputing/final-project-uee_fp_teamconquer.git",
    },
    {
      title: "ONLINE CLOTHING STORE USING SWIFTUI",
      description:
        "Designed and created a Online clothing store using swiftUI.",
      imgUrl: projImg3,
      gitHubUrl: "https://github.com/SE4020/assignment-02-umayangi12.git",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Academic Projects</h2>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
