import { Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../config/clientTitles";
import "../../../App.css";

export const NrcField = () => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center custom-form-input">
                <Col lg={6}>
                    <Row>
                        <Form.Label>{clientTitle.nrc_title}</Form.Label>
                        <Col lg={2}>
                            <Form.Select></Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Select></Form.Select>
                        </Col>
                        <Col lg={2}>
                            <Form.Select></Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="text"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}