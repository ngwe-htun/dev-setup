import "../../../../App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

export const PriceField = ({reserveLabel, offerLabel, offerInWordTitle }) => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center custom-form-input">
                <Col lg={3}>
                    <Form.Label>{reserveLabel}</Form.Label>
                    <Form.Control type="text" />
                </Col>
                <Col lg={3}>
                    <Form.Label>{offerLabel}</Form.Label>
                    <Form.Control type="text" />
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col lg={6}>
                    <Form.Label>{offerInWordTitle}</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Col>
            </Row>
        </Container>
    );
}