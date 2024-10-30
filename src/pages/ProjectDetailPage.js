import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../english.json';
import LeftPhoto from '../components/LeftPhoto';
import RightPhoto from '../components/RightPhoto';

const ProjectDetailPage = ({activeSection, project}) => {

  const active = content[project][activeSection];

  return (
    <Container className="mt-5">
      <Row>
        <h1>{content[project].title}</h1>
      </Row>
      <Row className="align-items-left">
        <Col md={1}></Col>
        <Col md={4} className="text-left">
          <Row>
            Description: {active.description}
          </Row>
          <Row>
            Objective: 
          </Row>
          <Row>
            Impact: {active.impact}
          </Row>
          <Row>
            Role: {active.role}
          </Row>
          <Row>
            Team: {active.team && active.team.map((member, index) => (
            <li key={index}>{member}</li>
            ))}
          </Row>
        </Col>
        <Col md={7} className="text-center">
          <img
            src= {active.image}
            alt="Nathan Standing"
            className="img-fluid"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Col>
      </Row>
      <Row>
        <h2> Key Takeaways</h2>
        <ul>
        {active.learned && active.learned.map((takeaway, index) => (
            <li key={index}>{takeaway}</li>
          ))}
        </ul>
      </Row>
      <LeftPhoto selection={project} activeSection={activeSection}></LeftPhoto>
      <RightPhoto selection={project} activeSection={activeSection}></RightPhoto>
      <LeftPhoto selection={project} activeSection={activeSection}></LeftPhoto>
      {/* <LeftPhoto></LeftPhoto> */}
    </Container>
   
  );
};

export default ProjectDetailPage;