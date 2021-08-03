import Topbar from '../topbar/Topbar';
import Footer from '../footer/Footer';
import "./resume.scss";
import { 
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap/'

export default function Resume() {
const url = "https://drive.google.com/file/d/1GzCRmP2Y_L-nTBr__dc0ZTUj6mDMurNO/preview"
  return (
    <>
    <Topbar/>
    <Container className="resume content-container" id="resume" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center">
          <h5>Resume</h5>
        </Col>
      </Row>
          <iframe
            src={url+"#toolbar=1&navpanes=0&scrollbar=0"}
            frameBorder="0"
            scrolling="auto"
            title="My Resume">
          </iframe>
        <Row>
          <Col className="d-flex justify-content-center py-1">
            <Button>
              <a href="/assets/Vusumuzi_Ngwazini_Resume_V8.pdf" target="_blank" class="btn">Download Resume</a>
            </Button>
          </Col>
        </Row>
          {/* <embed src={url + "#toolbar=1&navpanes=0&scrollbar=0"} type="application/pdf" width="100%" height="600px" /> */}
    </Container>
    <Footer/>
    </>
  )

}

