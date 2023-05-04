import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="container">
      <Container fluid className="p-0">
        <Row noGutters>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-info p-4">
              <h3>About Us</h3>
              <p>
                We are a team of experienced chefs who are passionate about creating
                delicious and healthy meals for our customers.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="footer-contact p-4">
              <h3>Contact Us</h3>
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@chefrestaurant.com</p>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className="footer-social p-4">
              <h3>Follow Us</h3>
              <p className="fs-5">Facebook <FontAwesomeIcon  icon={faFacebookF} /></p>
                 <br />
              <p className="fs-5">Twitter <FontAwesomeIcon  icon={faTwitter} /></p>
                 <br />
              <p className="fs-5">Instagram <FontAwesomeIcon  icon={faInstagram} /></p>
            </div>
          </Col>
        </Row>
        <Row noGutters>
          <Col className="footer-credits p-3 text-center" sm={12}>
            <p>&copy; 2023 Chef Restaurant. All rights reserved.</p>
            <p>Created by Your Name</p>
          </Col>
        </Row>
        <Row noGutters>
          <Col className="text-center py-3" sm={12}>
            <p><a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;