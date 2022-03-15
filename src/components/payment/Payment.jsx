import "./payment.scss";
import { useState } from "react";
import { 
  Row,
  Col,
  Container,
} from 'react-bootstrap/'
import FadeIn from 'react-fade-in';


import PaymentListItem from "../paymentListItem/PaymentListItem";
import {
  paymentData
} from "../../data";

export default function Payment() {
// eslint-disable-next-line
  const [data, setData] = useState(paymentData);

  return (
    <>
    <Container className="payment content-container" id="payment" fluid="true">
      <FadeIn>
        <Row>
          <Col className="d-flex justify-content-center">
            <h5>Accepted Forms of Payment</h5>
          </Col>
        </Row>
        <Row className="mx-4">
          {data.map((item) => (
            <PaymentListItem item={item}/>
          ))}
        </Row>
      </FadeIn>
    </Container>
    </>
  )
}
