import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../english.json';
import { Link, useNavigate } from 'react-router-dom';

const RightPhoto= ({activeSection, selection, setProject,}) => {

  const navigate = useNavigate();
  const active = content[selection][activeSection]

  const handleButtonClick = () => {
    setProject(selection); // Set the project state variable
    navigate(`/project/${selection}`); // Navigate to the project detail page
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6} className="text-md-start text-center">
        <h2>{content[selection][activeSection].title}</h2>
        <h4>{active.subTitle}</h4>
        <p>{content[selection][activeSection].summary}</p>
          <Button style={{ backgroundColor: '#3159F5', borderColor: '#4694F2' }} onClick={handleButtonClick}>
            <span className="text-white text-decoration-none">Project Details</span>
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={content[selection][activeSection].image}
            alt="Nathan Standing"
            className="img-fluid"
            style={{ width: '80%', height: '80%', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default RightPhoto;