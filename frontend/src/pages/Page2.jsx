import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";

export default function Page2(){
    return (
        <Container className="mt-1">
            <Row>
                <Col sm={12} style={{paddingTop: 85.77}}>
                    <div className="text-center">
                        <Figure>
                            <Figure.Image 
                            width={73}
                            height={80}
                            src="logo.png"></Figure.Image>
                        </Figure>
                        <div style={{
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "24",
                            lineHeight: "33px",
                            fontFamily: "Myanmar Sangam MN",
                            color: "000000",
                            paddingLeft: "30px",
                            paddingRight: "30px"
                        }}>
                            <p>
                            ရွှေဒင်္ဂါးပြား အော်ဒါဖောင် <br/>
                            (Order Form for Gold Coin)
                            </p>
                        </div>
                    </div>
                </Col>

                <Col sm={12}>
                    <Form style={{paddingLeft:"30px", paddingRight: "30px"}}>
                        <Form.Group style={{paddingBottom: "16px"}}>
                            <Form.Label style={{
                                fontSize: "14px"
                            }}>
                                ဝယ်ယူလိုသည့်မြို့ (Select City) 
                                <span style={{color: "#FF0000"}}> *</span>
                            </Form.Label>
                            <Form.Select required style={{height: "40px"}}>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group style={{paddingBottom: "16px"}}>
                            <Form.Label style={{
                                fontSize: "14px"
                            }}>
                                ဝယ်ယူလိုသည့် ရွှေဒင်္ဂါးပြားအမျိုးအစား (Type of Gold Coin) 
                                <span style={{color: "#FF0000"}}> *</span>
                            </Form.Label>
                            <Form.Select required style={{height: "40px"}}>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group style={{paddingBottom: "16px"}}>
                            <Form.Label style={{
                                fontSize: "14px"
                            }}>
                                ဝယ်ယူလိုသည့် ရက်စွဲ (Select Date)
                                <span style={{color: "#FF0000"}}> *</span>
                            </Form.Label>
                           <Form.Control type="date" />
                        </Form.Group>

                        <div className="text-center">
                        <Button type="submit"
                            style={{
                                height: "37px", 
                                width: "80px",
                                fontSize: "14px",
                                borderRadius: "5px",
                                background: "#0069D9",
                                opacity: "0.9",
                                marginTop: "30px"
                        }}>
                            Next
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}