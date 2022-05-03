import "./projects.scss";
import { useState } from "react";
import { 
  Row,
  Col,
  Container,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


import ProjectListItem from "../projectListItem/ProjectListItem";
import {
  projectData
} from "../../data";

export default function Projects() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);

  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

// eslint-disable-next-line
  const [data, setData] = useState(projectData);

  return (
    <>
    <Particles
      style={{zIndex:'auto', position: 'absolute'}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#0d47a1",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    <Container className="projects content-container mt-4" id="projects" fluid="true">
      <FadeIn>
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
      </FadeIn>
    </Container>
    </>
  )
}
