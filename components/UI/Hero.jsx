import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hi, I'm Chid" />
              <h2 className="mt-3 mb-3">Chidambararaja Boominathan</h2>
              <h5 className="mb-4">Senior React & React Native Developer</h5>
              <p>
                As a senior developer with over three years of experience in
                React and React Native, I have worked on numerous projects
                encompassing a diverse range of applications including
                Cryptocurrency Wallet, Admin Panel, Social Applications,
                E-commerce platforms, and many others.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#about">About me</Link>
                </button>

                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1_-4Qe0exh2E2MjvqbnTzFgcf7rsTYDyy/view?usp=sharing"
                  rel="noopener noreferrer"
                >
                  <button className="secondary__btn">
                    <p className="custom_text">Download CV</p>
                  </button>
                </a>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h6 className="mb-0">3+ Years</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
