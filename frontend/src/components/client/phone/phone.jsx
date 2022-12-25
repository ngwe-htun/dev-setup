import { clientTitle } from "../../../config/clientTitles";
import { Col, Container, Form, Row } from "react-bootstrap";

export const PhoneField = ({callback}) => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Form.Label>
                        {clientTitle.phone_label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="tel"  onChange={(e)=>callback(e.target.value)}/>
                </Col>
            </Row>
        </Container>
    );
}