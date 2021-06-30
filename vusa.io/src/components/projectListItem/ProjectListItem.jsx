import "./projectListItem.scss";
import { 
  Col,
  Card,
  Row,
} from 'react-bootstrap/'

export default function ProjectListItem({item}) {
  return (
    <Row className="d-flex justify-content-center text-center projectListItem">
    <Col className="d-flex justify-content-center py-4" sm="4">
    <a 
      href={item.link}
      target="_blank" rel="noreferrer"
    >
    <Card className="shadow card-size mx-4 my-4">
        <Card.Img 
          src={item.imgSrc}
          alt={item.imgAlt}
          className="img-thumbnail"
          style={{border: "transparent"}}
        />
        <Card.Title>{item.title}</Card.Title>
        <Card.Body>
          <Card.Text>
            {item.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{item.footer}</Card.Footer>
      </Card>
    </a>
    </Col>
    </Row>
  )
}
