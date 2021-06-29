import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Topbar from './components/topbar/Topbar';
import About from './components/about/About';
import Footer from './components/footer/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <About />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
