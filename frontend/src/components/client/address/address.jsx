import { clientTitle } from "../../../config/clientTitles";
import { Col, Container, Form, Row } from "react-bootstrap";

export const AddressField = ({setAddress}) => {
    
    const handleOnChange = (e) => {
        e.preventDefault();
        setAddress(e.target.value);
    }
    
    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form.Label>{clientTitle.address_label}</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>handleOnChange(e)} />
                </Col>
            </Row>
        </Container>
    );
}