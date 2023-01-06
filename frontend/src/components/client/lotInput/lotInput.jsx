import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../config/clientTitles";
import '../../../App.css';
import { useState } from "react";
import { getItemWithLot } from "../../../services/ClientService";

const LotInput = ({setSelectedLot}) => {
    
    const [lotNo, setLotNo] = useState('');

    // Fetch lot
    const fetchLot = async () => {
        try {
            let res = await getItemWithLot(lotNo);
            setSelectedLot(res);
        } catch (err) {

        }
    } 

    return (
            <Container className="custom-form-input">
                <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} lg={5}>
                    <Form.Group>
                        <Form.Label>{clientTitle.gem_jade_lot_no_input_label}</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setLotNo(e.target.value)}></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-center">
                <Col md={6} sm={12} lg={5}>
                    <Button type="submit" disabled={!lotNo} onClick={()=>fetchLot()}>{clientTitle.button_next_label}</Button>
                </Col>
            </Row>
        </Container>

    );
}

export default LotInput;