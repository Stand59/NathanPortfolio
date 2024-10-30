import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LeftPhoto from '../components/LeftPhoto';
import RightPhoto from '../components/RightPhoto';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = ({activeSection, setActiveSection, project, setProject}) => {
  // State variable to track the active section
  
  const projects = {
    "Id": ["ysearch", "edtech"], 
    "Dev":["math", "chatbot" ], 
    "Ux":["chatbot"],
    "Ai":["chatbot"]
  }
  const selection0 = projects[activeSection][0];
  const selection1 = projects[activeSection][1];
  const selection2 = projects[activeSection][2];
  const selection3 = projects[activeSection][3];

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/about`); // Navigate to the project detail page
  };

  const handleButtonClick2 = (selection) => {
    setProject(selection); // Set the project state variable
    navigate(`/project/${selection}`); // Navigate to the project detail page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Image on the left */}
        <Col md={4} className="text-center">
          <img
            src="/images/profile.jpeg"
            alt="Nathan Standing"
            className="img-fluid rounded-circle"
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
        </Col>
        
        {/* Text on the right */}
        <Col md={8} className="text-md-start text-center">
          <h1>Nathan Standing</h1>
          <h2 className="text-muted">Instructional Designer</h2>
          <p>
          From our very first breath, learning is a natural process. My purpose is to create learning experiences that thoughtfully facilitate and enhance this wonderful journey.
          </p>
          <Button onClick={handleButtonClick} style={{ backgroundColor: '#3159F5', borderColor: '#3159F5' }}>
          {/* <Button style={{ backgroundColor: '#add8e6', borderColor: '#add8e6' }} variant="primary"> */}
            <span className="text-white text-decoration-none"  >About Me</span>
          </Button>
        </Col>
      </Row>

      {/* Section Buttons */}
      <Row className="mt-5 text-center">
        <Col xs={2} md={2}>
          <Button 
            variant="link" 
            onClick={() => setActiveSection('Id')}
            style={{ 
              color: 'black', 
              textDecoration: 'none',
              borderBottom: activeSection === 'Id' ? '3px solid blue' : 'none',
              paddingBottom: '5px'
            }}
          >
            Instructional Design
          </Button>
        </Col>
        <Col xs={2} md={2}>
          <Button 
            variant="link" 
            onClick={() => setActiveSection('Dev')}
            style={{ 
              color: 'black', 
              textDecoration: 'none',
              borderBottom: activeSection === 'Dev' ? '3px solid blue' : 'none',
              paddingBottom: '5px'
            }}
          >
            E-Development
          </Button>
        </Col>
        <Col xs={2} md={2}>
          <Button 
            variant="link" 
            onClick={() => setActiveSection('Ai')}
            style={{ 
              color: 'black', 
              textDecoration: 'none',
              borderBottom: activeSection === 'Ai' ? '3px solid blue' : 'none',
              paddingBottom: '5px'
            }}
          >
            Artifical Inteligence
          </Button>
        </Col>
        <Col xs={2} md={2}>
          <Button 
            variant="link" 
            onClick={() => setActiveSection('Ux')}
            style={{ 
              color: 'black', 
              textDecoration: 'none',
              borderBottom: activeSection === 'Ux' ? '3px solid blue' : 'none',
              paddingBottom: '5px'
            }}
          >
            Research & UX Testing
          </Button>
        </Col>
        <Col xs={8} md={8} ></Col>
      </Row>
      <Row>
        <hr></hr>
      </Row>
      <br></br>
      <br></br>
      {/* Content Display Based on Active Section */}
      {/* <Row className="mt-5">
        <Col>
          {activeSection === 'home' && <p>Welcome to the Home section!</p>}
          {activeSection === 'about' && <p>Learn more About Me in this section.</p>}
          {activeSection === 'projects' && <p>Explore my Projects here.</p>}
          {activeSection === 'ai' && <p>Learn more about my work with AI here.</p>}
        </Col>
      </Row> */}
      <Row>
      {activeSection === "Dev" && (
        <p>
        In addition to my development work on{" "}
        <span onClick={() => handleButtonClick2('ysearch')} style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Ysearch</span>{" "}
        and{" "}
        <span onClick={() => handleButtonClick2('edtech')} style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Edtech Books</span> I have done the following development:
      </p>
      )}
      </Row>
      <Row>
  {selection0 && (
    <RightPhoto 
      selection={selection0} 
      activeSection={activeSection} 
      project={project} 
      setProject={setProject} 
    />
  )}
  {selection1 && (
    <LeftPhoto 
      selection={selection1} 
      activeSection={activeSection} 
      project={project} 
      setProject={setProject} 
    />
  )}
  {selection2 && (
    <RightPhoto 
      selection={selection2} 
      activeSection={activeSection} 
      project={project} 
      setProject={setProject} 
    />
  )}
  {selection3 && (
    <LeftPhoto 
      selection={selection3} 
      activeSection={activeSection} 
      project={project} 
      setProject={setProject} 
    />
  )}
</Row>
    </Container>
  );
};

export default HomePage;
