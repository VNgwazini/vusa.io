

import "./home.scss";
import {
 Container, 
 Row,
 Col,
 Button,
 Offcanvas,
 Modal,
 ButtonGroup,
} from 'react-bootstrap/'
import { Assignment, CastForEducation, Code, Computer, EmojiObjects, PhoneIphone } from "@material-ui/icons";
import FadeIn from 'react-fade-in';
import { init } from 'ityped'
import { InlineWidget } from "react-calendly";
import { useEffect, useState ,useRef } from "react"
import Resume from "../resume/Resume";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";


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

  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleClosePortfolio = () => setShowPortfolio(false);
  const handleCloseExperience = () => setShowExperience(false);
  const handleCloseResume = () => setShowResume(false);

  const handleShowPortfolio = () => setShowPortfolio(true);
  const handleShowExperience = () => setShowExperience(true);
  const handleShowResume = () => setShowResume(true);

 return (
  <Container className="home content-container py-4" id="home" fluid="true">
    <FadeIn>
      <Container className="content-container py-4 px-4">
        <FadeIn>
          <Row className="h-50">
            <Col className="text-center" lg={6} md={6} sm={12}>
              <p className="home-title text-center">
                Vusumuzi Ngwazini
              </p>
              <p className="text-center type-effect text-muted">
                Freelance <span className="typing" ref={textRef}></span>
              </p>
              <p className="trusted-title text-center">
                About Me
              </p>
              <p className="text-center">
                Vusumuzi is a software engineer, technology enthusiast, and is active in the technology startup community.
                He is interested in consumer software, web services, and mobile development opportunities.
              </p>
              <p className="text-center">
                As an i3 Scholar at the iSchool Inclusion Institute (i3), he has published research in spatial information processing and cognitively salient wayfinding aids. 
                As a SULI selectee at the Department of Energy, he has researched the viability of neural networks in predicting the amplitude of aperiodic signals.
              </p>
              <p className="text-center">
                He graduated with honors in 2019 from Oakwood University where he received a Bachelor’s in Computer Science.
              </p>
              {/* <p className="text-center">
                These days he is a full-time iOS developer for iPhone and iPad devices.
              </p> */}
              <p className="trusted-title text-center">
              Welcome, take a look around.
              </p>
              <p className="text-center text-muted">
              Let me know how I can serve you today!
              </p>
            </Col>
            <Col className="d-flex justify-content-center" lg={6} md={6} sm={12}>
              <img
              src="assets/headshot.png"
              alt="Headshot"
              className="img-thumbnail"
              />
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
      <Container className="content-container  py-4 px-4" fluid="true">
        <Row>
          <Col className="">
            <p className="trusted-title text-center">
              More Information
            </p>
          </Col>
        </Row>
        <Row className="text-center">
        <ButtonGroup aria-label="Basic example" className="pb-4 mb-4">
          <Button variant="primary" onClick={handleShowPortfolio}>View Portfolio</Button>
          <Button variant="primary" onClick={handleShowExperience}>View Experience</Button>
          <Button variant="primary" onClick={handleShowResume}>View Resume</Button>
        </ButtonGroup>
          <Col className="" sm={4} md={4} lg={4}>
            <Modal show={showPortfolio} onHide={handleClosePortfolio} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Portfolio</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Projects/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClosePortfolio}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col className="" sm={4} md={4} lg={4}>
            <Modal show={showExperience} onHide={handleCloseExperience} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Experience</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Experience/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseExperience}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col className="" sm={4} md={4} lg={4}>
            <Modal show={showResume} onHide={handleCloseResume} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Resume</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Resume/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseResume}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </FadeIn>
   </Container>
  )
}