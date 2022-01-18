import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import { BrowserRouter, Route } from 'react-router-dom'
import Resume from './components/resume/Resume';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';


ReactDOM.render(
    <BrowserRouter>
      <Topbar/>
      <Route exact path="/" component={About}/>
      <Route exact path="/home" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/experience" component={Experience}/>
      <Route exact path="/resume" component={Resume}/>
      <Footer/>
    </BrowserRouter>,
  document.getElementById('root')
);