import "../../../../App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

export const TwoInputFields = ({firstInput, secondInput}) => {
    
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {firstInput.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" onChange={(e)=>firstInput.callback(e.target.value)}/>
                </Col>
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {secondInput.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" onChange={(e)=>secondInput.callback(e.target.value)}/>
                </Col>
            </Row>
        </Container>
    );
}