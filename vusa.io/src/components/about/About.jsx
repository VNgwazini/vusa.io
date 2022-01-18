import "./about.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import Projects from '../../components/projects/Projects';
import Experience from '../../components/experience/Experience';
import Resume from '../../components/resume/Resume';


import { 
  Row,
  Col,
  Container,
  Card
} from 'react-bootstrap/'

export default function About() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed:  60,
      strings: ['Software Engineer','Back-end Developer', 'Front-end Developer'],
    })
  }, [])

  return (
    <>
    <Topbar/>
    <Container className="about content-container d-flex justify-content-around" id="about" fluid="true">
      <Row className="h-50 mx-4">
      <Col className="d-flex justify-content-center align-items-center" sm={12} md={4} lg={3}>
          <span>
            <img
            src="assets/headshot.png"
            alt="Headshot"
            className="img-thumbnail"
            />
          </span>
        </Col>
        <Col className="d-flex justify-content-center align-items-center" sm={12} md={8} lg={9}>
          <Card className="card-size">
            <Card.Title className="text-center pt-2">Vusumuzi Ngwazini</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              Freelance <span className="typing" ref={textRef}></span>
            </Card.Subtitle>
            <Card.Body className="text-center px-4">
              <Card.Text className="text-center px-4">
                Vusumuzi is a software engineer, technology enthusiast, and is active in the technology startup community.
                He is interested in consumer software, web services, and back end development opportunities.
              </Card.Text>
              <Card.Text className="text-center px-4">
                As an i3 Scholar at the iSchool Inclusion Institute (i3), he has published research in spatial information processing and cognitively salient wayfinding aids. 
                As a SULI selectee at the Department of Energy, he has researched the viability of neural networks in predicting the amplitude of aperiodic signals.
              </Card.Text>
              <Card.Text className="text-center px-4">
                He graduated with honors in 2019 from Oakwood University where he received a Bachelor’s in Computer Science.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Projects/>
    <Experience/>
    <Resume/>
    <Footer/>
    </>
  )
}
