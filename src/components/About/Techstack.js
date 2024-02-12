import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbSql } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiAngularSimple,
  DiSass,
} from "react-icons/di";
import {
  SiRedis,
  SiApachekafka,
  SiPostgresql,
  SiTypescript,
  SiSpringboot,
  SiHibernate,
  SiGraphql,
  SiJsonwebtokens,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="skillName">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="skillName">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p className="skillName">C/C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="skillName">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
        <p className="skillName">SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p className="skillName">Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="skillName">Node.Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="skillName">React.Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p className="skillName">Angular.Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p className="skillName">SpringBoot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
        <p className="skillName">Hibernate</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <p className="skillName">GraphQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <p className="skillName">Sass</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens />
        <p className="skillName">JWT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="skillName">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="skillName">PostgreSql</p>
      </Col>       
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="skillName">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <p className="skillName">Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <p className="skillName">Kafka</p>
      </Col>
    </Row>
  );
}

export default Techstack;
