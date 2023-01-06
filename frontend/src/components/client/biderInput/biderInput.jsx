import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../config/clientTitles";
import '../../../App.css';
import { useState } from "react";
import { getBiderInfo } from "../../../services/ClientService";

const BiderCheckInput = ({setBider}) => {
    
    const [isFailed, setIsFailed] = useState(false);
    const [biderRegNo, setBiderRegNo] = useState('');

    // Check bider
    const checkBider = async (e) => {

        e.preventDefault();
        try {
            let res = await getBiderInfo(biderRegNo);
            setBider(res);
        } catch (err) {
            console.log(err)   
        }
    }

    return (
        <Form  className="mt-5" onSubmit={(e)=> checkBider(e)} >
        <Container className="custom-form-input">
            <Row className="d-flex justify-content-center">
                <Col sm={8} md={5} lg={5} xs={10}>
                    <Form.Group>
                        <Form.Label>{clientTitle.bidder_reg_no_input_label}</Form.Label>
                        <Form.Control type="text" onChange={(e)=>{setIsFailed(false); setBiderRegNo(e.target.value)}} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-center">
                <Col sm={8} md={5} lg={5} xs={10}>
                    <Button type="submit" disabled={!biderRegNo}>{clientTitle.button_next_label}</Button>
                </Col>
            </Row>
            <Row  className="mt-3 d-flex justify-content-center">
                <Col sm={8} md={5} lg={5} xs={10}>
                    {isFailed ? <p className="text-danger">{clientTitle.bider_check_not_found}</p> : null}
                </Col>
            </Row>
        </Container>
        </Form>

    );
}

export default BiderCheckInput;