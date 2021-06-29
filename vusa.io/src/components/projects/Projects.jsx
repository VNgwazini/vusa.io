import "./projects.scss";
import { 
  Row,
  Col,
  Container,
  Card
} from 'react-bootstrap/'
import {Mail, LinkedIn, GitHub, Twitter} from "@material-ui/icons"

export default function Projects() {
  return (
    <Container className="projects pt-4 content-container" id="projects" fluid="true">
      <Row>
         <Col className="d-flex justify-content-center py-4 content">
          <h5 className="px-4 text-left">Software Engineering Portfolio</h5>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center text-center">
      <Col className="d-flex justify-content-center py-4" sm="4">
        <a 
          href="https://play.google.com/store/apps/details?id=com.vusa.mymemory"
          target="_blank" rel="noreferrer"
        >
        <Card className="shadow card-size mx-4 my-4">
            <Card.Img 
              src="assets/Khumbula_feature_graphic.png"
              alt="Khumbula"
              className="img-thumbnail"
              style={{border: "transparent"}}
            />
            <Card.Title>Khumbula: Memory Game</Card.Title>
            <Card.Body>
              <Card.Text>
                An image matching game for Android with 3 difficulty levels.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2021 · Android App Development</Card.Footer>
          </Card>
        </a>
        </Col>
        <Col className="d-flex justify-content-center py-4" sm="4">
        <a 
          href="https://demo-rental-property-app.vusa.io/"
          target="_blank" rel="noreferrer"
        >
        <Card className="shadow card-size mx-4 my-4" sm="4">
            <Card.Img 
              src="assets/RentBarkerPreview.png"
              alt="Rental"
              className="img-thumbnail"
              style={{border: "transparent"}}
            />
            <Card.Title>Rental Property App</Card.Title>
            <Card.Body>
              <Card.Text>
                A react app for finding rental properties based on your preferences.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2020 · Web App Development</Card.Footer>
          </Card>
        </a>
        </Col>
        <Col className="d-flex justify-content-center py-4">
        <a 
          href="https://demo-healthcare-app.vusa.io/"
          target="_blank" rel="noreferrer"
        >
        <Card className="shadow card-size mx-4 my-4">
            <Card.Img 
              src="assets/WalaPreview.png"
              alt="Healthcare"
              className="img-thumbnail"
              style={{border: "transparent"}}
            />
            <Card.Title>Healthcare App</Card.Title>
            <Card.Body>
              <Card.Text>
                An app for managing blood inventory between multiple blood banks.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2020 · Web App Development</Card.Footer>
          </Card>
        </a>
        </Col>
      </Row>
    </Container>
  )
}
