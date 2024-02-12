import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiKubernetes,
  SiDocker,
  SiQt,
  SiWireshark,
  SiWindows,
  SiLinux,
  SiArduino,
  SiRaspberrypi,
} from "react-icons/si";

import { DiGit,} from "react-icons/di"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <p className="skillName">Kubernetes</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="skillName">Docker</p>
      </Col>       
       
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="skillName">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="skillName">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="skillName">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQt />
        <p className="skillName">Qt</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
        <p className="skillName">Wireshark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
        <p className="skillName">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows/>
        <p className="skillName">Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <p className="skillName">Mac</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
        <p className="skillName">RaspberryPi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <p className="skillName">Arduino</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
