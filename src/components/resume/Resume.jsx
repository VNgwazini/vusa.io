import "./resume.scss";
import { 
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap/'

export default function Resume() {
const url = "https://drive.google.com/file/d/1A6zLbTTqLrbIMknU8BPlKGf2YRQPsTzW/preview"
  return (
    <>
    <Container className="resume content-container" id="resume" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center">
          <h5>Resume</h5>
        </Col>
      </Row>
      <Row>
          <Col className="d-flex justify-content-center py-2">
            <Button>
              <a href="https://drive.google.com/uc?id=1A6zLbTTqLrbIMknU8BPlKGf2YRQPsTzW&export=download" target="_blank" rel="noreferrer" class="btn">Download Resume</a>
            </Button>
          </Col>
        </Row>
          <iframe
            src={url+"#toolbar=1&navpanes=0&scrollbar=0"}
            className="px-4"
            frameBorder="0"
            scrolling="auto"
            title="My Resume">
          </iframe>
          {/* <embed src={url + "#toolbar=1&navpanes=0&scrollbar=0"} type="application/pdf" width="100%" height="600px" /> */}
    </Container>
    </>
  )

}

