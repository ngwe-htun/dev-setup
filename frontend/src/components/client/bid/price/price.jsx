import "../../../../App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

export const PriceField = ({reserve, offer, offerInWord }) => {
    return (
        <Container className="mt-3">
            <Row className="justify-content-center custom-form-input">
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {reserve.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" value={reserve.data} readOnly={true}/>
                </Col>
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {offer.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type="text" onChange={(e)=>offer.callback(e.target.value)} />
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Form.Label>
                        {offerInWord.label}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>offerInWord.callback(e.target.value)}/>
                </Col>
            </Row>
        </Container>
    );
}