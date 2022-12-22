import { Col, Container, Row } from "react-bootstrap";

export const RemindField = ({remindText}) => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <span className="text-danger">{remindText}</span>
                </Col>
            </Row>
        </Container>
    );
}