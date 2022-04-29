import "./app.scss";
// import Payment from "../payment/Payment";
import Projects from '../../components/projects/Projects';
import Experience from '../../components/experience/Experience';
import Resume from '../../components/resume/Resume';
import FadeIn from 'react-fade-in';
import { 
  Container,
  Row,
  Col,
  Accordion,
} from 'react-bootstrap/'

import Home from "../home/Home";

export default function App() {

  return (
    <>
    <FadeIn>
      <Home/>
      {/* <Payment/> */}
      <Container className="options content-container mb-4 pt-4" id="options" fluid="true">
        <Row>
          <Col>
            <Accordion className="px-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="d-flex justify-content-center">Software Engineering Portfolio</Accordion.Header>
                <Accordion.Body>
                  <Projects/>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Work Experience</Accordion.Header>
                <Accordion.Body>
                  <Experience/>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Resume</Accordion.Header>
                <Accordion.Body>
                  <Resume/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </FadeIn>
    </>
  )
}
