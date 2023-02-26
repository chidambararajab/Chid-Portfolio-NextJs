import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Hey there! I'm really excited about the opportunity to join your
              company and be a part of your team. I'm confident that I've got
              the skills and experience you're looking for, and I'm committed to
              making a positive impact from day one. Let's start this journey
              together and see where it takes us!
              {/* Hey there! I'm here to lend a hand with your next application
              development project. I've got the skills and experience to help
              you get the job done right, and I'm committed to delivering
              results that you can trust. Let's work together to make your next
              project a success! Looking forward to start the journy on your
              company. */}
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Looking for hybride (any location) or remote work</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Current Location - Chennai, India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>chidambararaja97@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+91 8682992677</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <a
                target="_blank"
                href="https://github.com/chidambararajab"
                rel="noopener noreferrer"
              >
                <i className="ri-github-line"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/chidambararajab/"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-line"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/thechidshow/"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
