import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../english.json';
import { Link, useNavigate } from 'react-router-dom';

const LeftPhoto = ({ activeSection, selection, setProject }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setProject(selection); // Set the project state variable
    navigate(`/project/${selection}`); // Navigate to the project detail page
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Image on the left */}
        <Col md={4} className="text-center">
          <img
            src={content[selection][activeSection].image}
            alt="Nathan Standing"
            className="img-fluid"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Col>
        
        {/* Text on the right */}
        <Col md={8} className="text-md-start text-center">
          <h2>{content[selection][activeSection].title}</h2>
          <p>{content[selection][activeSection].summary}</p>
          <Button variant="primary" onClick={handleButtonClick}>
            <span className="text-white text-decoration-none">Project Details</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftPhoto;