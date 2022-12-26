import { Card, Col, Container, Row } from "react-bootstrap";
import { clientTitle } from "../../../../config/clientTitles";
import "../bid.css";

export const BidRegField = ({bidRegNo}) => {
    return (
        <Container>
            <Row className="justify-content-center mt-1">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                <span>
                                    {clientTitle.bid_reg_no_title}
                                </span>
                            </div>
                            <div>
                                <span className="lot-reg-field">
                                    {bidRegNo}
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}