import "./app.scss";
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import Projects from '../../components/projects/Projects';
import Experience from '../../components/experience/Experience';
import Resume from '../../components/resume/Resume';
import FadeIn from 'react-fade-in';

import Home from "../home/Home";

export default function App() {

  return (
    <>
    <Topbar/>
    <FadeIn>
      <Home/>
      <Projects/>
      <Experience/>
      <Resume/>
    </FadeIn>
    <Footer/>
    </>
  )
}
