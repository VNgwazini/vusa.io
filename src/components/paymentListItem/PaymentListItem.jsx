import "./paymentListItem.scss";
import { 
  Col,
  Card,
} from 'react-bootstrap/'

export default function PaymentListItem({item}) {
  return (
        <Col className="text-center paymentListItem my-4" lg={2} md={6} sm={6}>
          <a 
            href={item.link}
            target="_blank" rel="noreferrer"
          >
          <Card className="shadow card-size">
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
  )
}
