import './order.css';
import { Button, Col, Container, Form, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";

export default function Page3(styles) {
    return (
        <Container className='mb-3'>
            <Form>
            <Row>
                <Col xs={6}>
                    <Form.Group>
                        <Form.Label className="order-label">ဝယ်သူအမည် (Buyer’s Name)</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group>
                        <Form.Label className="order-label">အဘအမည် (Father’s Name)</Form.Label>
                        <Form.Control className='test'></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Label className="order-label">နိုင်ငံသားစိစစ်ရေးအမှတ် (NRC) *</Form.Label>
                    <Form.Group>
                        <Row>
                            <Col xs={3}>
                                <Form.Select></Form.Select>
                            </Col>
                            <Col xs={3}>
                                <Form.Select></Form.Select>
                            </Col>
                            <Col xs={3}>
                                <Form.Select></Form.Select>
                            </Col>
                            <Col xs={3}>
                                <Form.Control></Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Label className="order-label">အလုပ်အကိုင် (Current Job) *</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Label className="order-label">နေရပ်လိပ်စာ (Address) *</Form.Label>
                        <Form.Control as="textarea" rows={2}></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Label className="order-label">ဆက်သွယ်ရမည့်ဖုန်းနံပါတ် (Contact Phone Number) *</Form.Label>
                        <Form.Control type='phone'></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Label className="order-label">ဝယ်ယူရခြင်း၏အကြောင်းအရင်းခံ (Reason to Buy) *</Form.Label>
                        <Form.Control type='phone'></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Group>
                        <Form.Label className="order-label">လစဥ်ဝင်ငွေရရှိမှု (Monthly Income Salary) *</Form.Label>
                        <Form.Control type='phone'></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='pt-3'>
                <Col xs={12} >
                    <Form.Group>
                        <Form.Label className="order-label">ယခင်က ရွှေဒင်္ဂါးပြား ဝယ်ယူခဲ့ဖူးခြင်း ရှိ/မရှိ (Did you buy the Gold Coin before?) *</Form.Label>
                    <Row>
                        <Col xs={6}>
                            <Form.Check type="radio" label="ရှိ (Yes)" className='order-label'/>
                        </Col>
                        <Col xs={6}>
                            <Form.Check type="radio" label="မရှိ (No)" className='order-label'/>
                        </Col>
                    </Row>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='pt-3'>
                <Col xs={12} >
                    <Form.Group>
                        <Form.Label className="order-label">အရည်ကြိုခြင်း/ ပြန်လည်ရောင်းချခြင်း (လုံးဝ) မပြုကြောင်း ကတိဝန်ခံချက် ပြုလို/မပြုလို (Do you promise not to be Liquidation or Reselling the Gold Coin?) *</Form.Label>
                    <Row>
                        <Col xs={6}>
                            <Form.Check type="radio" label="ပြုလိုပါသည် (Yes)" className='order-label'/>
                        </Col>
                        <Col xs={6}>
                            <Form.Check type="radio" label="မပြုလိုပါ (No)" className='order-label'/>
                        </Col>
                    </Row>
                    </Form.Group>
                </Col>
            </Row>
      
            <Row>
                <span className='alert'>* အမှတ်တရသိမ်းဆည်းရန် ဒင်္ဂါးပြားများ ရောင်းချပေးလျက်ရှိ၍ အရည်ကြိုခြင်း၊ တစ်ဆင့်ရောင်းချခြင်း (လုံးဝ) မပြုလုပ်ရန် (Do not be liquidation or reselling the gold coin.)</span>
            </Row>

            <Row>
                <Col xs={12}>
                    <Button type='submit' className='submit-button'>Submit</Button>
                </Col>
            </Row>

            </Form>
        </Container>
    );
}