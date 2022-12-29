import { clientTitle } from "../../../../config/clientTitles";
import clientAxios from "../../../../services/axios/ClientAxios";
import { Col, Row, Container, Card, Button } from "react-bootstrap";

// GOLD COIN DETAIL
const OrderDetail = () => {
    
    const exportPdf = async (e) => {
        try {
            let res = await clientAxios.get('https://jsonplaceholder.typicode.com/todos/1');
        } catch (err) {
            console.log(err)
        }
    }
    
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
                                        <p>Aung Aung</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Father Name */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.gold_order_father_name}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>U Kyaw</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** NRC */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.nrc_title}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>12/AHLANA (C) 000000</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Job */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.job_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>လက်ယားလက်ယား</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Address */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.address_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>လက်ယားလက်ယား</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Phone */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.phone_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>ကီးပတ်ပဲရှိတယ်</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Reason */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.reason_to_buy_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>ကီးပတ်ပဲရှိတယ်</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Income */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.monthly_salary_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>100000</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Already ordered ? */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.already_order_label}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>မရှိ (No)</p>
                                    </Col>
                                </Row>
                                <hr />
                                {/** Term ? */}
                                <Row>
                                    <Col>
                                        <p>{clientTitle.gold_order_aggrement}</p>
                                    </Col>
                                    <Col className="text-right">
                                        <p>မရှိ (No)</p>
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
                                <Button className="w-full mr-3">hello</Button>
                            </Col>
                            <Col>
                                <Button className="w-full ml-3" onClick={()=>exportPdf()} >hello</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default OrderDetail;