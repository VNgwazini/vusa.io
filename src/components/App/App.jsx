import "./app.scss";
// import Payment from "../payment/Payment";
import Projects from '../../components/projects/Projects';
import Experience from '../../components/experience/Experience';
import Resume from '../../components/resume/Resume';
import FadeIn from 'react-fade-in';

import Home from "../home/Home";

export default function App() {

  return (
    <>
    <FadeIn>
      <Home/>
      {/* <Payment/> */}
      <Projects/>
      <Experience/>
      <Resume/>
    </FadeIn>
    </>
  )
}
