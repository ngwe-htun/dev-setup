import { Card, Col, Container, Figure, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();



    return (
        <Container className="mt-4">
            <Row>
                <Col className="d-flex justify-content-center lg-12 md-12 sm-12">
                    <Figure >
                        <Figure.Image src="logo.png"></Figure.Image>
                    </Figure>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <h6>
                        သယံဇာတနှင့် သဘာဝပတ်ဝန်းကျင် <br/>
                        ထိန်းသိမ်းရေး ဝန်ကြီးဌာန <br/>
                        (Ministry of Natural Resources and  <br/>
                        Environmental Conservation)
                    </h6>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col sm={6} xs={6} className="pt-3">
                    <Card className="text-center" onClick={()=> navigate('/gold') }>
                        <Card.Body>
                            <Figure >
                                <Figure.Image
                                width={72}
                                height={70} 
                                src="gold.png" />
                            </Figure>
                            <p>ရွှေဒင်္ဂါးပြား (Gold Coin)</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} xs={6} className="pt-3">
                    <Card className="text-center">
                        <Card.Body>
                            <Figure >
                                <Figure.Image 
                                width={72}
                                height={70}
                                src="gold_1.png" />
                            </Figure>
                            <p>ရွှေစင်ချောင်း (Pure Gold)</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} xs={6} className="pt-3">
                    <Card className="text-center">
                        <Card.Body>
                            <Figure >
                                <Figure.Image 
                                    width={72} 
                                    height={70}
                                    src="jade.png" />
                            </Figure>
                            <p>ကျောက်စိမ်း(Jade)</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} xs={6} className="pt-3">
                    <Card className="text-center">
                        <Card.Body>
                            <Figure >
                                <Figure.Image 
                                    width={72} 
                                    height={70}
                                    src="gem.png" />
                            </Figure>
                            <p>ကျောက်မျက်ရတနာ (Gem)</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}