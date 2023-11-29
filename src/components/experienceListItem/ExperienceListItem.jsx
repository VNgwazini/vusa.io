import "./experienceListItem.scss";
import {
  Col,
  Card,
  Row,
} from 'react-bootstrap/'

export default function ExperienceListItem({ experience }) {
  return (
    <Col className="d-flex justify-content-center py-4 experienceListItem" lg={12} md={12} sm={12}>
      <Card className="shadow card-size">
        <Card.Header>
          {experience.category}
        </Card.Header>
        <Card.Body>
          <Row>
            {Object.keys(experience.jobs).map((job, jobIndex) => (
              <>
                <Col xl={6} lg={12} md={12} sm={12}>
                  <Card.Title>
                    {experience.jobs[jobIndex].company}
                  </Card.Title>
                  <Card.Title>
                    <span style={{ color: "green" }}>
                      {experience.jobs[jobIndex].position}
                    </span>
                  </Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: "navy" }}>
                    {experience.jobs[jobIndex].duration}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {experience.jobs[jobIndex].about}
                  </Card.Subtitle>
                  <Card.Text className="mb-2">
                    <details>
                    <summary>More...</summary>
                    <ul>
                      {Object.keys(experience.jobs[jobIndex].responsibilities).map((responibility, responsibiltyIndex) => (
                        <>
                          <li>
                            {experience.jobs[jobIndex].responsibilities[responsibiltyIndex]}
                          </li>
                        </>
                      ))}
                    </ul>
                    </details>
                  </Card.Text>
                </Col>
              </>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}
