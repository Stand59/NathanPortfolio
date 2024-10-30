import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../english.json';
import { Link, useNavigate } from 'react-router-dom';

const LeftPhoto = ({ activeSection, selection, setProject }) => {
  const navigate = useNavigate();
  const active = content[selection][activeSection];

  const handleButtonClick = () => {
    setProject(selection); // Set the project state variable
    navigate(`/project/${selection}`); // Navigate to the project detail page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  console.log(activeSection)
  console.log(content[selection][activeSection])
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Image on the left */}
        <Col md={4} className="text-start">
          <img
            src={content[selection][activeSection].image}
            alt="Nathan Standing"
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain', float: 'left' }}
          />
        </Col>
        
        {/* Text on the right */}
        <Col md={8} className="text-md-start text-center">
          <h2>{content[selection][activeSection].title}</h2>
          <h4>{active.subTitle}</h4>
          <p>{active.summary1}</p>
          <p>{active.summary2}</p>
          <Button style={{ backgroundColor: '#3159F5', borderColor: '#4694F2' }} onClick={handleButtonClick}>
            <span className="text-white text-decoration-none">Project Details</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftPhoto;