import "./about.scss";
import { 
  Row,
  Col,
  Container,
  Card
} from 'react-bootstrap/'
import {Mail, LinkedIn, GitHub, Twitter} from "@material-ui/icons"

export default function About() {
  return (
    <Container className="about" id="content" fluid="true">
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
          <Card style={{  border: "transparent" }}>
            <Card.Title className="text-center pt-2">Vusumuzi Ngwazini</Card.Title>
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
