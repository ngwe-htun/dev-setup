import "../../../../App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

export const OneInputField = ({input}) => {
    
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Form.Label>
                        {input.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" onChange={(e)=>input.callback(e.target.value)}/>
                </Col>
            </Row>
        </Container>
    );
}