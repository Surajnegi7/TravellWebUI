import React from 'react';
import './external.css'; // Assuming you'll have a CSS file for custom styles
import './index.css';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs';
export function Advice() {
  return (
    <div className="contact-banner-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-content text-white">
            <h2 className="heading mb-3">
              Need some <span className="advicespan">advice?</span>
            </h2>
            <p className="description text-white">
              We have great first-hand knowledge of all Adventrus
              <br />
              locations, and we are passionate about Ocean Sports.
              <br />
              Call, chat or message us for expert impartial advice.
            </p>
          </Col>
          <Col
            md={6}
            className="contact-info-container text-md-end text-center mt-4 mt-md-0"
          >
            <div className="contact-details d-inline-block text-md-start">
              <p className="mb-0 text-white">UK tour operator</p>
              <p className="mb-2 text-white">
                financial protection for <br />
                worldwide customers
              </p>
              <p className="mb-3 text-white">Mon-Sat 09:30-18:00 BST</p>
            </div>
            <div className="contact-buttons align-items-center d-flex">
              <a
                href="tel:+442037440141"
                className="contact-btn phone-btn d-flex align-items-center justify-content-center me-3"
              >
                <BsFillTelephoneFill className="contact-icon me-2" />
                <span className="number">+44 20 3744 0141</span>
              </a>
              <a
                href="https://wa.me/447776224034"
                className="contact-btn whatsapp-btn d-flex align-items-center justify-content-center"
              >
                <BsWhatsapp className="contact-icon me-2" />
                <span className="number">+44 7776 224 034</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
