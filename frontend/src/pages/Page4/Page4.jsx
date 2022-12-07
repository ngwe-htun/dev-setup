import './page4.css';
import '../order.css';
import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";

export default function Page4() {
    return (
        <Container>
            <Row className='logo-top-margin'>
                <Col xs={12} className="text-center">
                    <Figure>
                        <Figure.Image src="logo.png" className="logo"/>
                    </Figure>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center">
                    <p className='order-title'>
                        ကျောက်စိမ်း အော်ဒါဖောင် <br></br>
                        (Order Form for Jade)
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form>
                        <Form.Group>
                            <Form.Label className='order-label'>အတွဲအမှတ် / Lot No / 标号 *</Form.Label>
                            <Form.Select></Form.Select>
                        </Form.Group>

                        <Form.Group className='pt-3'>
                            <Form.Label className='order-label'>အခြေခံ စျေးနှုန်း [ယူရို] / Reserve Price [Euro] / 底价 [欧元] *</Form.Label>
                            <Form.Select></Form.Select>
                        </Form.Group>

                        <div className='pt-3 text-center'>
                            <Button type='submit' className='next-button'>Next</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}