import { Button, Col, Container, Row } from "react-bootstrap";
import "../../../App.css";
import { clientTitle } from "../../../config/clientTitles";

export const SubmitButton = ({fields, callBack}) => {
    return (
        <Container className="mt-5 mb-5 custom-form-input">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Button className="w-full" disabled={!fields} onClick={()=>callBack()} >{clientTitle.submit_label}</Button>
                </Col>
            </Row>
        </Container>
    );
}