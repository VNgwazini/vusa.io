import "./resume.scss";
import { 
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap/'

export default function Resume() {
const url = "https://drive.google.com/file/d/1VTV4SKI1dsIG8JPaACIFJLlG6kb8G5zI/preview"
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
              <a href="/assets/Vusumuzi_Ngwazini_Resume_V8.3.pdf" target="_blank" class="btn">Download Resume</a>
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

