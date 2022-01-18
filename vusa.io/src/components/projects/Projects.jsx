import "./projects.scss";
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import { useState } from "react";
import { 
  Row,
  Col,
  Container,
} from 'react-bootstrap/'

import ProjectListItem from "../projectListItem/ProjectListItem";
import {
  projectData
} from "../../data";

export default function Projects() {
// eslint-disable-next-line
  const [data, setData] = useState(projectData);

  return (
    <>
    <Container className="projects content-container" id="projects" fluid="true">
       <Row>
         <Col className="d-flex justify-content-center">
          <h5>Software Engineering Portfolio</h5>
        </Col>
      </Row>
      <Row className="mx-4">
        {data.map((item) => (
          <ProjectListItem item={item}/>
        ))}
      </Row>
    </Container>
    </>
  )
}
