import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../config/clientTitles";
import '../../../App.css';
import { useState } from "react";

const BiderCheckInput = ({setBidder, setBiderInfo}) => {
    
    const [isFailed, setIsFailed] = useState(false);
    const [biderRegNo, setBiderRegNo] = useState('');

    // Check bider
    const checkBider = (e) => {
        e.preventDefault();
        try {
            // setIsFailed(true);
            setBiderInfo(biderRegNo)
        } catch (err) {
            console.log(err)   
        }
    }

    return (
        <Form  className="mt-5" onSubmit={(e)=> checkBider(e)} >
        <Container className="custom-form-input">
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} lg={5}>
                    <Form.Group>
                        <Form.Label>{clientTitle.bidder_reg_no_input_label}</Form.Label>
                        <Form.Control type="text" onChange={(e)=>{setIsFailed(false); setBiderRegNo(e.target.value)}} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-center">
                <Col md={6} sm={12} lg={5}>
                    <Button type="submit" disabled={!biderRegNo}>{clientTitle.button_next_label}</Button>
                </Col>
            </Row>
            <Row  className="mt-3 d-flex justify-content-center">
                <Col md={6} sm={12} lg={5}>
                    {isFailed ? <p className="text-danger">{clientTitle.bider_check_not_found}</p> : null}
                </Col>
            </Row>
        </Container>
        </Form>

    );
}

export default BiderCheckInput;