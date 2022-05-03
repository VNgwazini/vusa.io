import { useState } from "react";
import "./experience.scss";
import { 
  Container,
  Row,
  Col,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';

import ExperienceListItem from "../experienceListItem/ExperienceListItem";
import {
  experienceData
} from "../../data";

export default function Experience() {
// eslint-disable-next-line
  const [data, setData] = useState(experienceData);

  return (
    <>
    <Container className="experience content-container mt-4" id="experience" fluid="true">
      <FadeIn>
        <Row>
          <Col className="d-flex justify-content-center content">
            <h5>Work Experience</h5>
          </Col>
        </Row>
        <Row className="mx-4">
          {data.map((experience) => (
            <ExperienceListItem experience={experience}/>
          ))}
        </Row>
      </FadeIn>
    </Container>
    </>
  )

}