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
            <Col className="d-flex justify-content-center">
              <h5>Peek Into My Background</h5>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p>
                An in-depth breakdown of my <strong>professional and personal work.</strong>
              </p>
            </Col>
          </Row>
          <Row className="mx-4">
            {data.map((experience) => (
              <ExperienceListItem experience={experience} />
            ))}
          </Row>
        </FadeIn>
      </Container>
    </>
  )

}