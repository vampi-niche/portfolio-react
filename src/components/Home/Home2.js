import React from "react";
import { Container, Row, Col, Tooltip } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="blue"> Hello </span> There !
            </h1>
            <p className="home-about-body">
              I've fallen head over heels for{" "}
              <b className="blue"> computers </b>, and I like to think I've
              picked up a thing or two along the journey.
              <br />
              <br />
              I'm well-versed in timeless languages such as
              <i>
                <b className="blue"> Java </b>(A billion devices still run it?),{" "}
                <b className="blue">C </b>(I really admire it), and of course,{" "}
                <b className="blue">Javascript </b>(Throw everything, Get
                everything).
              </i>
              <br />
              <br />
              My interests lie in crafting{" "}
              <b className="blue">scalable complex systems</b>{" "}
              <Tooltip text="(but i like to keep it simple)" />, investing in
              <b className="blue"> modern engineering </b>, and implementing{" "}
              <b className="blue"> security </b>{" "}
              <Tooltip>to face challenges</Tooltip>.
              <br />
              <br />I can make a conversations in
              <b className="blue"> English </b>,<b className="blue"> Telugu </b>
              ,<b className="blue"> Hindi </b>,<b className="blue"> Tamil </b>{" "}
              and
              <b style={{ color: "purple" }}> French </b>. May be we should
              catch up sometime to talk!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vampi-niche"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vamshikrishnachittaloori/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
