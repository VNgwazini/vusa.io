import "./about.scss";
import { 
  Row,
  Col,
  Container
} from 'react-bootstrap/'
import {Mail, LinkedIn, GitHub, Twitter} from "@material-ui/icons"

export default function About() {
  return (
    <Container className="about" id="content" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center">
        <img
          src="assets/headshot.png"
          alt="Headshot"
          />
        </Col>
      </Row>
      <Row>
        <Col className="">
          <h1 className="d-flex justify-content-center">Vusumuzi Ngwazini</h1>
          <p className="d-flex justify-content-center">
            Vusumuzi is a software engineer, technology enthusiast, and is active in the technology startup community.
            He is interested in consumer software, web services, and back end development opportunities.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
