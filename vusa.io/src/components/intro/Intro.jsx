
import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { 
  Col,
  Container,
  Row,
  Image
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
      <Row className="flex-grow-1">
        <Col>
          <img
          src="assets/headshot.png"
          alt="Headshot"
          style={{
            height: "100%",
          }}
          />
        </Col>
        <Col className="intro-decription d-flex flex-column justify-content-center align-items-center" fluid>
          <Row>
            <h3>Hi, I'm Vusumuzi Ngwazini</h3>
          </Row>
          <Row>
            <h4>
              Freelance <span className="intro_positions" ref={textRef}></span>
            </h4>
          </Row>
          <Row>
            <Col>
              <h1 className="intro_arrow">
                <a href="#portfolio">
                  <ExpandMoreIcon style={{fontSize: "10vw", color: "green", lineHeight: "0.1em"}}/>
                </a>
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
