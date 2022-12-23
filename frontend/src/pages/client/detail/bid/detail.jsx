import { Button, Card, Col, Container, Figure, Row } from "react-bootstrap";
import { clientTitle } from "../../../../config/clientTitles";
import { Title } from "../../../../config/title";
import { Divider } from 'primereact/divider';
import { RemindField } from "../../../../components/client/remind/remind";
import "../../../../App.css";


export const BidDetail = () => {

    return (
        <>
        <Container className="custom-form-input">
            <Row className="justify-content-center">
                <Col lg={8} md={10} sm={12}>
                    <Row>
                        <Col lg={2} md={3} sm={3} xs={3} className="text-left">
                            <Figure.Image src="/logo.png" />
                        </Col>
                        <Col lg={8} md={6} sm={6} xs={6} className="text-center">
                            <h4>MINI GEM EMPORIUM</h4>
                            <span style={{fontSize: "24px"}}>BIDDING FORM OF JADE</span>
                        </Col>
                        <Col lg={2} md={3} sm={3} xs={3} className="text-right">
                            <Figure.Image src="/logo.png" />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="justify-content-center mt-3">
                <Col lg={8} md={10} sm={12}>
                    <Card>
                        <Card.Body>
                            <p>{clientTitle.bid_lot_no_title}</p>
                            <span>1000004</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-3">
                <Col lg={8} md={10} sm={12}>
                    <Card>
                        <Card.Body>
                            <p>{clientTitle.bid_reg_no_title}</p>
                            <span>1000004</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-3">
                <Col lg={8} md={10} sm={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p>{clientTitle.bid_reserve_price_kyat}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>500</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.bid_reserve_price_kyat}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>500</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.bid_offer_price_word_kyat}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>500</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.bid_signature_title}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>500</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.bid_name_title}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>500</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.company_label}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>500</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.country_label}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>500</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-3">
                <Col lg={8} md={10} sm={12}>
                    <p className="text-danger">စျေးနှုန်းတင်သွင်းလွှာအား လွှဲပြောင်းခွင့်မပြု။ မိမိရေးသားချက်အပေါ် တာဝန်ယူရမည်။ / This form is not permitted to transfer. It is your responsibility for the data on this bidding form. / 请勿转让此标单。要负责自己写的一切。</p>
                </Col>
            </Row>

            <Row className="justify-content-center mt-3 mb-3">
                <Col lg={8} md={10} sm={12}>
                    <Row>
                        <Col>
                            <Button variant="outline-primary" className="w-full">{clientTitle.back_to_home_label}</Button>
                        </Col>
                        <Col>
                            <Button className="w-full">
                                <i className="pi pi-save pr-2"></i>
                                {clientTitle.save_as_pdf_label}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>

    );
}