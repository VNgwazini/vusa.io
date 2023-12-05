

import "./home.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Offcanvas,
  Modal,
  ButtonGroup,
  Image,
} from 'react-bootstrap/'
import { Assignment, CastForEducation, Code, Computer, EmojiObjects, PhoneIphone } from "@material-ui/icons";
import FadeIn from 'react-fade-in';
import { init } from 'ityped'
import { InlineWidget } from "react-calendly";
import { useEffect, useState, useRef } from "react"
import Resume from "../resume/Resume";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";


export default function Home() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Software Engineer', 'Mobile Developer', 'Back-end Developer', 'Front-end Developer'],
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
    <>
      <title>Vusumuzi Ngwazini: Software Engineering Portfolio</title>
      <Container className="home content-container py-4" id="home" fluid="true">
        <FadeIn>
          <Container className="content-container py-4 px-4">
            <FadeIn>
              <Row className="h-50">
                <Col className="text-center" lg={6} md={12} sm={12}>
                  <p className="home-title text-center pt-4">
                    Vusumuzi Ngwazini
                  </p>
                  <p className="text-center type-effect text-muted">
                    Professional <span className="typing" ref={textRef}></span>
                  </p>
                  <p className="trusted-title text-center">
                    About Me
                  </p>
                  <p className="text-center">
                    Vusumuzi is a software engineer, technology enthusiast, and is active in the financial technology community as an android developer.
                  </p>
                  <p className="text-center">
                    Currently he is a member of /dev/color, NSBE, and is an active supporter of increasing diversity in the tech industry.
                  </p>
                  <p className="trusted-title text-center">
                    Welcome, take a look around.
                  </p>
                  <p className="text-center text-muted">
                    Let me know how I can serve you today!
                  </p>
                </Col>
                <Col className="d-flex justify-content-center pt-4" lg={6} md={12} sm={12}>
                  <Image
                    src="assets/headshot.jpg"
                    alt="Headshot"
                    className="img-thumbnail"
                    roundedCircle
                    width={360}
                  />
                </Col>
              </Row>
              <Row className="primary-buttons py-4">
                <Col className="">
                  <Button variant="dark" onClick={handleShow}>
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
                  <Button variant="outline-dark" href="mailto:vusumuzi.ngwazini@gmail.com" target="_blank">
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
                  <Code /> &nbsp; Full Stack Web Development
                </p>
              </Col>
              <Col className="" sm={3} md={4} lg={4}>
                <p className="">
                  <Computer /> &nbsp; C++ &amp; Java Development
                </p>
              </Col>
              <Col className="" sm={3} md={4} lg={4}>
                <p className="">
                  <PhoneIphone /> &nbsp; Mobile Development
                </p>
              </Col>
              <Col className="" sm={3} md={4} lg={4}>
                <p className="">
                  <CastForEducation /> &nbsp; Computer Science Tutoring
                </p>
              </Col>
              <Col className="" sm={3} md={4} lg={4}>
                <p className="">
                  <EmojiObjects /> &nbsp; Technology Consulting
                </p>
              </Col>
              <Col className="" sm={3} md={4} lg={4}>
                <p className="">
                  <Assignment /> &nbsp; Resume Review
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
                <Button variant="dark" onClick={handleShowPortfolio}>View Portfolio</Button>
                <Button variant="dark" onClick={handleShowExperience}>View Experience</Button>
                <Button variant="dark" onClick={handleShowResume}>View Resume</Button>
              </ButtonGroup>
              <Col className="" sm={4} md={4} lg={4}>
                <Modal show={showPortfolio} onHide={handleClosePortfolio} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Portfolio</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Projects />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={handleClosePortfolio}>
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
                    <Experience />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseExperience}>
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
                    <Resume />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseResume}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Container>
        </FadeIn>
      </Container>
    </>
  )
}
