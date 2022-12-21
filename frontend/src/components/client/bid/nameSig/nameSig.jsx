import { Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../../config/clientTitles";
import "../../../../App.css";

export const NameSig = () => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center custom-form-input">
                <Col lg={3}>
                    <Form.Label>{clientTitle.bid_signature_title}</Form.Label>
                    <Form.Control type='text' />
                </Col>
                <Col lg={3}>
                    <Form.Label>{clientTitle.bid_name_title}</Form.Label>
                    <Form.Control type='text' />
                </Col>
            </Row>
        </Container>
    );
}