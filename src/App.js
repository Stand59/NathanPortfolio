import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('Id');
  const [project, setProject] = useState('ysearch');
  const [page, setPage] = useState('summary');

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage activeSection={activeSection} setActiveSection={setActiveSection} project={project} setProject={setProject} />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage activeSection={activeSection} setActiveSection={setActiveSection} project={project} setProject={setProject} />} />
      </Routes>
      {/* Conditionally render Footer only if not on the home page */}
      {/* {location.pathname !== '/' && <Footer />} */}
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;