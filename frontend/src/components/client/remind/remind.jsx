import { Col, Container, Row } from "react-bootstrap";

export const RemindField = ({remindText}) => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <span className="text-danger">{remindText}</span>
                </Col>
            </Row>
        </Container>
    );
}