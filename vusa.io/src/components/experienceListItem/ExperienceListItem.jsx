import "./experienceListItem.scss";
import { 
  Col,
  Card,
  Row,
} from 'react-bootstrap/'

export default function ExperienceListItem({experience}) {
  return (
    <Row>
      <Col className="d-flex justify-content-center py-4 mb-4 experienceListItem">
        <Card className="shadow card-size">
          <Card.Header>
            {experience.category}
          </Card.Header>
          <Card.Body>
          {Object.keys(experience.jobs).map((job, jobIndex) => (
            <>
            <Card.Title>
              {experience.jobs[jobIndex].company}
            </Card.Title>
            <Card.Title>
              <span style={{color: "green"}}>
                {experience.jobs[jobIndex].position}
              </span>
            </Card.Title>
            <Card.Subtitle className="mb-2" style={{color: "navy"}}>
              {experience.jobs[jobIndex].duration}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {experience.jobs[jobIndex].about}
            </Card.Subtitle>
            <Card.Text>
              <ul>
                {Object.keys(experience.jobs[jobIndex].responsibilities).map((responibility, responsibiltyIndex) => (
                  <>
                  <li>
                    {experience.jobs[jobIndex].responsibilities[responsibiltyIndex]}
                  </li>
                  </>
                ))}
              </ul>
            </Card.Text>
            </>          
          ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
