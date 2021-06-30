import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Topbar from './components/topbar/Topbar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <About />
    <Projects/>
    <Experience />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
