import { clientTitle } from "../../../config/clientTitles";
import { Col, Container, Form, Row } from "react-bootstrap";

export const PhoneField = () => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form.Label>{clientTitle.phone_label}</Form.Label>
                    <Form.Control type="tel" />
                </Col>
            </Row>
        </Container>
    );
}