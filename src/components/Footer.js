import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg py-4 bg-light mt-5">
      <Container >
        <Row>
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 Nathan Standing. All rights reserved.</p>
          <p>Follow me on: 
            <a href="https://www.linkedin.com/in/nathan-standing-4212a4133/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
            <a href="https://github.com/Stand59" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
        </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


// <Row className="justify-content-center">
//           {/* Grid of 3x3 Photos */}
//           <Col xs={12} md={4} className="mb-3">
//             <img src="/images/ysearch.png" alt="Photo 1" className="img-fluid square-photo" />
//           </Col>
//           <Col xs={12} md={4} className="mb-3">
//             <img src="/images/edTech.png" alt="Photo 2" className="img-fluid square-photo" />
//           </Col>
//           <Col xs={12} md={4} className="mb-3">
//             <img src="/images/chatbot.png" alt="Photo 3" className="img-fluid square-photo" />
//           </Col>
//           <Col xs={12} md={4} className="mb-3">
//             <img src="/images/math.png" alt="Photo 4" className="img-fluid square-photo" />
//           </Col>
//           <Col xs={12} md={4} className="mb-3">
//           </Col>
//           <Col xs={12} md={4} className="mb-3">
//             <img src="/images/ysearch.png" alt="Photo 6" className="img-fluid square-photo" />
//           </Col>
//         </Row>