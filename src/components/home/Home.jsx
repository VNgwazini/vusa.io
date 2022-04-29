import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Offcanvas,
} from 'react-bootstrap/'
import { Assignment, CastForEducation, Code, Computer, EmojiObjects, PhoneIphone } from "@material-ui/icons";
import FadeIn from 'react-fade-in';
import { init } from 'ityped'
import { InlineWidget } from "react-calendly";
import { useEffect, useState ,useRef } from "react"


export default function Home() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed:  60,
      strings: ['Software Engineer','Back-end Developer', 'Front-end Developer'],
    })
  }, [])
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 return (
  <Container className="home content-container py-4" id="home" fluid="true">
    <FadeIn>
      <Container className="content-container py-4 px-4">
        <FadeIn>
          <Row className="h-50">
            <Col className="d-flex justify-content-center" lg={6} md={6} sm={12}>
              <img
              src="assets/headshot.png"
              alt="Headshot"
              className="img-thumbnail"
              />
            </Col>
            <Col className="text-center" lg={6} md={6} sm={12}>
              <p className="home-title text-center">
                Vusumuzi Ngwazini
              </p>
              <p className="text-center type-effect text-muted">
                Freelance <span className="typing" ref={textRef}></span>
              </p>
              <p className="text-center">
                Vusumuzi is a software engineer, technology enthusiast, and is active in the technology startup community.
                He is interested in consumer software, web services, and back end development opportunities.
              </p>
              <p className="text-center">
                As an i3 Scholar at the iSchool Inclusion Institute (i3), he has published research in spatial information processing and cognitively salient wayfinding aids. 
                As a SULI selectee at the Department of Energy, he has researched the viability of neural networks in predicting the amplitude of aperiodic signals.
              </p>
              <p className="text-center">
                He graduated with honors in 2019 from Oakwood University where he received a Bachelor’s in Computer Science.
              </p>
              <p className="trusted-title text-center">
              Welcome, take a look around.
              </p>
              <p className="text-center text-muted">
              Let me know how I can serve you today!
              </p>
            </Col>
          </Row>
          <Row className="primary-buttons py-4">
            <Col className="">
              <Button variant="primary" onClick={handleShow}>
                Book an Appointment
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Book an Appointment</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <InlineWidget 
                    url="https://calendly.com/vusumuzi-ngwazini?hide_gdpr_banner=1" 
                    styles={{
                      height: '100%'
                    }}
                  />
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
            <Col className="">
              <Button variant="outline-primary" href="mailto:vusumuzi.ngwazini@gmail.com" target="_blank">
                Contact Me Via Email
              </Button>
            </Col>
          </Row>
        </FadeIn>
      </Container>
      <Container className="content-container trusted py-4 px-4" fluid="true">
        <Row>
          <Col className="">
            <p className="trusted-title text-center">
              Offered Services
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="" sm={3} md={4} lg={4}>
            <p className="">
            <Code/> &nbsp; Full Stack Web Development
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="">
            <Computer/> &nbsp; C++ &amp; Java Development
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="">
            <PhoneIphone/> &nbsp; Mobile Development
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="">
            <CastForEducation/> &nbsp; Computer Science Tutoring
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="">
            <EmojiObjects/> &nbsp; Technology Consulting
            </p>
          </Col>
          <Col className="" sm={3} md={4} lg={4}>
            <p className="">
            <Assignment/> &nbsp; Resume Review
            </p>
          </Col>
        </Row>
      </Container>
    </FadeIn>
   </Container>
  )
}