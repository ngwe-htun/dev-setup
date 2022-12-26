import "../../../../App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

export const TwoShowField = ({firstInput, secondInput}) => {
    
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {firstInput.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" value={firstInput.data} readOnly={true} />
                </Col>
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {secondInput.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" value={secondInput.data} readOnly={true}/>
                </Col>
            </Row>
        </Container>
    );
}