import { useState } from "react";
import "./experience.scss";
import { 
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap/'
import ExperienceListItem from "../experienceListItem/ExperienceListItem";
import {
  experienceData
} from "../../data";

import { green } from '@material-ui/core/colors';

export default function Experience() {

  const [data, setData] = useState(experienceData);

  return (
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
  )

}