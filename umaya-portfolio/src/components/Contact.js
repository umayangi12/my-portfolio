import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import contact from "../assets/img//contact.png";
import NavIcon5 from "../assets/img/email.svg";
import linkedin from "../assets/img/linkedin.svg";
import facebook from "../assets/img/facebook.svg";
import '../App.css'

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();

      setFormDetails(formInitialDetails);
      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Oops! Something went wrong",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Oops! Something went wrong",
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container style={{ height: "300px" }}>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contact} alt="Contact Us" />
          </Col>
          <Col style={{ marginLeft: "230px" }}>
            <div
              className="container contact-container"
              style={{ marginBottom: "10px" }}
            >
              <div className="contact-options">
                <article
                  className="contact-option"
                  style={{ marginTop: "-40px" }}
                >
                  <img
                    className="contact-option-icon"
                    src={NavIcon5}
                    alt="email"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h4>Email</h4>
                  <h5>umayangi1999@gmail.com</h5>
                  <a href="mailto:umayangi1999@gmail.com">Send a message</a>
                </article>

                <article className="contact-option">
                  <img
                    className="contact-option-icon"
                    src={linkedin}
                    alt="linkenIn"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <h4>LinkedIn</h4>
                  <h5>Indrachapa Ekanayake</h5>
                  <a href="https://www.linkedin.com/in/indrachapa-ekanayake">
                    Send a message
                  </a>
                </article>
                <article className="contact-option">
                  <img
                    className="contact-option-icon"
                    src={facebook}
                    alt="facebook"
                    style={{ width: "25px", height: "25px" }}
                  />
                  <h4>Facebook</h4>
                  <h5>Umayangi Ekanayake</h5>
                  <a href="https://www.facebook.com/umaya.ekanayake.7?mibextid=ZbWKwL">
                    Send a message
                  </a>
                </article>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
