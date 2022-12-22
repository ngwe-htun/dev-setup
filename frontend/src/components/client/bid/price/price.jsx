import "../../../../App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

export const PriceField = ({reserveLabel, offerLabel, offerInWordTitle }) => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center custom-form-input">
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {reserveLabel}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" />
                </Col>
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {offerLabel}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" />
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Form.Label>
                        {offerInWordTitle}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Col>
            </Row>
        </Container>
    );
}