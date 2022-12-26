import { Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../../config/clientTitles";
import "../../../../App.css";
import { useState } from "react";

export const NameSig = ({data}) => {

    return (
        <Container className="mt-3">
            <Row className="justify-content-center custom-form-input">
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {clientTitle.bid_signature_title}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type='text' value={data} readOnly={true}/>
                </Col>
                <Col lg={4} md={4} sm={5} xs={6}>
                    <Form.Label>
                        {clientTitle.bid_name_title}
                        <span className="required-star">*</span>                        
                    </Form.Label>
                    <Form.Control type='text' value={data} readOnly={true} />
                </Col>
            </Row>
        </Container>
    );
}