import "../../../../App.css";
import "../../../../common/responsive.css";
import { Button, Card, Col, Container, Figure, Row } from "react-bootstrap";
import { clientTitle } from "../../../../config/clientTitles";
import { LotNoField } from "../../../../components/client/bid/lotNo/lotField";
import { BidRegField } from "../../../../components/client/bid/bidReg/bidRegField";
import { useOutletContext } from "react-router-dom";

// AUCTION DETAIL
export const BidDetail = () => {

    // Consts
    const bider = useOutletContext()?.bider;
    const lotInfo = useOutletContext()?.lotInfo;
    const orderInfo = useOutletContext()?.orderInfo.auction;

    return (
        <>
        <Container>
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Row >
                        <Col>
                            <Figure.Image src="/logo.png" />
                        </Col>
                        <Col className="text-center">
                            <h4>MINI GEM EMPORIUM</h4>
                            <span style={{fontSize: "24px"}}>BIDDING FORM OF JADE</span>
                        </Col>
                        <Col className="text-right">
                            <Figure.Image src="/logo.png" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <LotNoField lotInfo={lotInfo} />
        <BidRegField bidRegNo={bider.bider_reg_number} />
        <Container className="custom-form-input">
            <Row className="justify-content-center mt-3">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p>
                                        {
                                            orderInfo.is_euro 
                                            ? clientTitle.bid_reserve_price_euro
                                            : clientTitle.bid_reserve_price_kyat
                                        }
                                    </p>
                                </Col>
                                <Col className="text-right">
                                    <p>{orderInfo.reserve}</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>
                                        {
                                            orderInfo.is_euro 
                                            ? clientTitle.bid_offer_price_euro
                                            : clientTitle.bid_offer_price_kyat
                                        }
                                    </p>
                                </Col>
                                <Col className="text-right">
                                    <p>{orderInfo.offer}</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>
                                        {
                                            orderInfo.is_euro 
                                            ? clientTitle.bid_offer_price_word_euro
                                            : clientTitle.bid_offer_price_word_kyat
                                        }
                                    </p>
                                </Col>
                                <Col className="text-right">
                                    <p>{orderInfo.offerInWord}</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.bid_signature_title}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>{bider.name}</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.bid_name_title}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>{bider.name}</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.company_label}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>{bider.company}</p>
                                </Col>
                            </Row>
                            <hr style={{margin: "2px"}}/>
                            <Row>
                                <Col>
                                    <p>{clientTitle.country_label}</p>
                                </Col>
                                <Col className="text-right">
                                    <p>{bider.country}</p>
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