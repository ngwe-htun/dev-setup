import { Card, Col, Container, Row } from "react-bootstrap";
import { clientTitle } from "../../../../config/clientTitles";
import "../../../../App.css";
import "../bid.css";

export const LotNoField = ({lotNo}) => {
    return (
        <Container className="custom-form-input mt-3">
            <Row className="justify-content-center">
                <Col lg={6} md={6}>
                    <Card>
                        <Card.Body>
                            <div className="form-label">
                                <span>
                                    {clientTitle.bid_lot_no_title}
                                </span> 
                            </div>
                            <span className="lot-reg-field">
                                {lotNo}
                            </span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}