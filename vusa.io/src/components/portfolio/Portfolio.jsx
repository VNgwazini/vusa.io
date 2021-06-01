
import "./portfolio.scss"
import { 
  Col,
  Container,
  Row,
  Carousel
} from 'react-bootstrap/'

export default function Portfolio() {

  return (
    <Container className="portfolio" id="portfolio" fluid="true">
      <Row>
        <Col>
          <Carousel variant="light">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/Khumbula_feature_graphic.png"
                alt="Android Game"
                style={{
                  height: "100vh",
                  width: "100vw"
                }}
              />
              <Carousel.Caption>
                <h5>Android Game</h5>
                <p>A matching game with 3 difficulty levels.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/WalaPreview.png"
                alt="Healthcare App"
                style={{
                  height: "100vh",
                  width: "100vw"
                }}
              />
              <Carousel.Caption>
                <h5>Healthcare App</h5>
                <p>A one-page app for managing blood inventory and requests across a network of blood banks.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/RentBarkerPreview.png"
                alt="Rental Property App"
                style={{
                  height: "100vh",
                  width: "100vw"
                }}
              />
              <Carousel.Caption>
                <h5>Rental Property App</h5>
                <p>A preference based app for finding rental properties.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
