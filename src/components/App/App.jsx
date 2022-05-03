import "./app.scss";
// import Payment from "../payment/Payment";
import FadeIn from 'react-fade-in';

import Home from "../home/Home";

export default function App() {

  return (
    <>
    <FadeIn>
      <Home/>
      {/* <Payment/> */}
    </FadeIn>
    </>
  )
}
