import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import transport from "../../Assets/Projects/transport.png";
import reviews from "../../Assets/Projects/reviews.png";
import database from "../../Assets/Projects/databse.png";
import leaf from "../../Assets/Projects/passwrds.png";
import vuln from "../../Assets/Projects/vuln.jpg";





function Projects() {

  const projectsList = [
    {
      title: "Route Repository System",
      description:"A fullstack web application for an organization's transport management system powered by Angular frontend, NodeJs backend and MongoDB designed to be faster, scalable and micro-managed service-oriented architecture."
      ,url: "https://github.com/vampi-niche/Angular_Frontend_Routes"
    },
    {
      title:"Sentimental Analysis Application",
      description:"A Django-based web application to recommend users a prescribed drug based on reviews and symptoms using polarity extraction by Max-ent and Naive Bayes Algorithms."
      
    },
    {
      title: "University Enrollment Database System",
      description:"A relational DBMS application to manage a univeresity's enrollment activities which can be quickly queried and viewed, developed using Microsoft SQL Server Studio."
      ,url:"https://github.com/vampi-niche/databaseProject"
    },
    {
      title:"Secure Local Password Manager",
      description:"Developed a password manager application which generates complex passwords (using an imperative algorithm) from simple (memorable) instances and securely stores them in the device for user access (not publicly available)."
    },
    {
      title:"Extensive Vulnerability Analysis",
      description:"Conducted a security analysis for an organization's website, exploring and documenting undiscovered vulnerability and reported the results along with the recommendations (not publicly available)."
    }
  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transport}
              isBlog={false}
              title={projectsList[0].title}
              description={projectsList[0].description}
              ghLink={projectsList[0].url}
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reviews}
              isBlog={true}
              title={projectsList[1].title}
              description={projectsList[1].description}
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title={projectsList[2].title}
              description={projectsList[2].description}
              ghLink={projectsList[2].url}
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={true}
              title={projectsList[3].title}
              description={projectsList[3].description}
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vuln}
              isBlog={true}
              title={projectsList[4].title}
              description={projectsList[4].description}
             
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
