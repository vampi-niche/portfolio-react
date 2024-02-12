import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="blue">Vamshi Chittaloori</span> is 
            from <span className="blue"> Hyderabad, India.</span>
            <br />
            He is currently pursuing his Master's degree in <br /><span className="blue"> Inforamation Technology Security </span> from 
            Arizona State University,
            <br />
            where he is also working as <span className="blue"> Technology Consultant</span>.

            <br/>
            He was also a <span className="blue"> Software Engineer </span>at Wipro.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
