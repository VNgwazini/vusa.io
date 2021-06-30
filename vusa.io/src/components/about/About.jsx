import "./about.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { 
  Row,
  Col,
  Container,
  Card
} from 'react-bootstrap/'
import {Mail, LinkedIn, GitHub, Twitter} from "@material-ui/icons"

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
    <Container className="about content-container" id="about" fluid="true">
      <Row className="h-50">
        <Col className="d-flex justify-content-center align-items-center">
          <span>
            <img
            src="assets/headshot.png"
            alt="Headshot"
            className="img-thumbnail"
            />
          </span>
        </Col>
      </Row>
      <Row className="h-50">
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="card-size">
            <Card.Title className="text-center pt-2">Vusumuzi Ngwazini</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              Freelance <span className="typing" ref={textRef}></span>
            </Card.Subtitle>
            <Card.Body className="text-center">
              <Card.Text>
                Vusumuzi is a software engineer, technology enthusiast, and is active in the technology startup community.
                He is interested in consumer software, web services, and back end development opportunities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
