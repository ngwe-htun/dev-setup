import { clientTitle } from "../../../../config/clientTitles";
import clientAxios from "../../../../services/axios/ClientAxios";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";

// GOLD COIN DETAIL
const OrderDetail = () => {
    
    // Consts
    const navigate = useNavigate();
    const orderInfo = useOutletContext()?.orderInfo;

    return(
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} md={8} sm={10} xs={12}>
                        <Card>
                            <Card.Body>
                                {/** Buyer name */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.gold_order_buyer_name}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.buyer_name}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Father Name */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.gold_order_father_name}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.father_name}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** NRC */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.nrc_title}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.nrc}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Job */}
                                {/* <Row>
                                    <Col>
                                        <p>{clientTitle.job_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>လက်ယားလက်ယား</p>
                                    </Col>
                                </Row> */}
                                {/* <hr /> */}
                                {/** Address */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.address_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.address}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Phone */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.phone_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.phone}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Reason */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.reason_to_buy_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.purchase_reason}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Income */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.monthly_salary_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.monthly_income}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Already ordered ? */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.already_order_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.already_ordered == 1 ? "ရှိ (Yes)": "မရှိ (No)"}</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Term ? */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.gold_order_aggrement}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>{orderInfo.term_condition == 1 ? "ပြု (Yes)": "မပြု (No)"}</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/** Reminder */}
                <Row className="justify-content-center">
                    <Col lg={8} md={8} sm={10} xs={12}>
                        <p className="text-danger">{clientTitle.gold_order_remind}</p>
                    </Col>
                </Row>
                {/** Actions */}
                <Row className="justify-content-center">
                    <Col lg={8} md={8} sm={10} xs={12}>
                        <Row>
                            <Col>
                            <Button variant="outline-primary" className="w-full" onClick={() => navigate('/')}>{clientTitle.back_to_home_label}</Button>
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

export default OrderDetail;