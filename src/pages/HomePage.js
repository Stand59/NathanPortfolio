import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LeftPhoto from '../components/LeftPhoto';
import RightPhoto from '../components/RightPhoto';

const HomePage = ({activeSection, setActiveSection, project, setProject}) => {
  // State variable to track the active section
  
  const projects = {
    "Id": ["ysearch", "edtech", "chatbot", "math"], 
    "Dev":["ysearch", "chatbot",  "math", "chatbot" ], 
    "Ux":["edtech", "edtech", "ysearch", "edtech"],
    "Ai":["ysearch", "edtech", "ysearch", "edtech"]
  }
  const selection0 = projects[activeSection][0];
  const selection1 = projects[activeSection][1];
  const selection2 = projects[activeSection][2];
  const selection3 = projects[activeSection][3];

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
            Tenderloin landjaeger boudin venison ham hock picanha. Chicken leberkas flank picanha rump pig sausage. Bacon boudin tri-tip kielbasa pig shankle. Short loin pig bacon porchetta, fatback t-bone picanha ribeye drumstick ball tip
          </p>
          <Button variant="primary">
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
        <Col xs={8} md={8} ></Col>
      </Row>
      <Row>
        <hr></hr>
      </Row>

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
        <RightPhoto selection={selection0} activeSection={activeSection} project={project} setProject={setProject}></RightPhoto>
        <LeftPhoto selection={selection1} activeSection={activeSection} project={project} setProject={setProject} ></LeftPhoto>
        <RightPhoto selection={selection2} activeSection={activeSection} project={project} setProject={setProject}></RightPhoto>
        <LeftPhoto selection={selection3} activeSection={activeSection} project={project} setProject={setProject}></LeftPhoto>
      </Row>
    </Container>
  );
};

export default HomePage;
