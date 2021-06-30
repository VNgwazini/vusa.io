import { useState } from "react";
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import "./experience.scss";
import { 
  Container,
  Row,
  Col,
} from 'react-bootstrap/'
import ExperienceListItem from "../experienceListItem/ExperienceListItem";
import {
  experienceData
} from "../../data";

export default function Experience() {
// eslint-disable-next-line
  const [data, setData] = useState(experienceData);

  return (
    <>
    <Topbar/>
    <Container className="experience content-container px-4" id="experience" fluid="true">
      <Row>
        <Col className="d-flex justify-content-center content">
          <h5>Work Experience</h5>
        </Col>
      </Row>
        {data.map((experience) => (
          <ExperienceListItem experience={experience}/>
        ))}
    </Container>
    <Footer/>
    </>
  )

}