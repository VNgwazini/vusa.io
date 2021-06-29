
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { 
  Col,
  Container,
  Row
} from 'react-bootstrap/'

export default function Intro() {

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
    <Container className="intro d-flex justify-content-center" id="intro" fluid>
      <Row>
        <Col className="intro-face">
          <img
          src="assets/headshot.png"
          alt="Headshot"
          style={{
            height: "100%",
          }}
          />
        </Col>
      </Row>
      <Row className="">
        <Col className="intro-decription d-flex flex-column justify-content-center align-items-center" fluid>
          <Row>
            <h3>Hi, I'm Vusumuzi Ngwazini</h3>
          </Row>
          <Row>
            <h4>
              Freelance <span className="intro_positions" ref={textRef}></span>
            </h4>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
