import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../config/clientTitles";
import '../../../App.css';
import { useState } from "react";

const LotInput = ({setSelectedLot}) => {
    
    const [lotNo, setLotNo] = useState('');

    // Fetch lots ...

    // Handle lot change
    const handleLotChange = (e) => {
        e.preventDefault();
        setLotNo(e.target.value);
    } 

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedLot(lotNo);
    }

    return (
        <Form  className="mt-5" onSubmit={(e)=> handleSubmit(e)} >
            <Container className="custom-form-input">
                <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} lg={5}>
                    <Form.Group>
                        <Form.Label>{clientTitle.gem_jade_lot_no_input_label}</Form.Label>
                        <Form.Select size="lg" onChange={(e) => handleLotChange(e)}>
                            <option value={1}>lot-1</option>
                            <option value={2}>lot-2</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-center">
                <Col md={6} sm={12} lg={5}>
                    <Button type="submit" disabled={!lotNo}>{clientTitle.button_next_label}</Button>
                </Col>
            </Row>
        </Container>
        </Form>

    );
}

export default LotInput;