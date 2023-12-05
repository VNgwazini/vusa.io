import "./projects.scss";
import { useState } from "react";
import {
  Row,
  Col,
  Container,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


import ProjectListItem from "../projectListItem/ProjectListItem";
import {
  projectData
} from "../../data";

export default function Projects() {
  // eslint-disable-next-line
  const [data, setData] = useState(projectData);

  return (
    <>
      <title>Projects</title>
      <Container className="projects content-container mt-4" id="projects" fluid="true">
        <FadeIn>
          <Row>
            <Col className="d-flex justify-content-center">
              <h5>Explore My Portfolio</h5>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p>A small selection of my <strong>past and current projects. </strong>
                <br></br>
                <center>View a demo by clicking any of the tiles below.</center>
              </p>
            </Col>
          </Row>
          <Row className="mx-4">
            {data.map((item) => (
              <ProjectListItem item={item} />
            ))}
          </Row>
        </FadeIn>
      </Container>
    </>
  )
}