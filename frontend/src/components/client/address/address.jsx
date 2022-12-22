import { clientTitle } from "../../../config/clientTitles";
import { Col, Container, Form, Row } from "react-bootstrap";

export const AddressField = ({setAddress}) => {
    
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Form.Label>
                        {clientTitle.address_label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>setAddress(e.target.value)} />
                </Col>
            </Row>
        </Container>
    );
}