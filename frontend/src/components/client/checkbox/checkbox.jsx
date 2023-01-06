import { Col, Container, Form, Row } from "react-bootstrap";

export const CheckBoxField = ({input}) => {
    
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Form.Label>
                        {input.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Row>
                        <Col lg={4} md={4} sm={5} xs={6}>
                            <Form.Check type="radio"  value={1} label={input.yes} onChange={(e)=>input.callback(e.target.value)}/>
                        </Col>
                        <Col lg={4} md={4} sm={5} xs={6}>
                            <Form.Check type="radio" value={0} label={input.no} onChange={(e)=>input.callback(e.target.value)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}