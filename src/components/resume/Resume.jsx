import "./resume.scss";
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap/'

export default function Resume() {
  const url = "https://drive.google.com/file/d/1eZC5iBPcJMZnxwZpxpSwhwhXVUwu-DoP/preview"
  return (
    <>
      <Container className="resume content-container mt-4" id="resume" fluid="true">
        <Row>
          <Col className="d-flex justify-content-center">
            <h5>View My Resume</h5>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <p>A brief summary of my <strong>engineering journey.</strong>
              <br></br>
              <center>Download a copy by clicking the button below.</center>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center py-2">
            <Button variant="dark">
              <a href="https://drive.google.com/uc?id=1eZC5iBPcJMZnxwZpxpSwhwhXVUwu-DoP&export=download" target="_blank" rel="noreferrer">Download Resume</a>
            </Button>
          </Col>
        </Row>
        <iframe
          src={url + "#toolbar=1&navpanes=0&scrollbar=0"}
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

