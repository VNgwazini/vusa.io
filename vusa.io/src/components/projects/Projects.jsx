import "./projects.scss";
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

  const [data, setData] = useState(projectData);

  return (
    <Container className="projects content-container" id="projects" fluid="true">
       <Row>
         <Col className="d-flex justify-content-center py-4 content">
          <h5 className="px-4 pt-4 text-left">Software Engineering Portfolio</h5>
        </Col>
      </Row>
        {data.map((item) => (
          <ProjectListItem item={item}/>
        ))}
    </Container>
  )
}
