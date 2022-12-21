import './order.css';
import { Button, Col, Container, Form, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { getNrcData } from '../../../../services/ClientService';

export default function GoldOrder(styles) {

    const defaultData = {
        "buyer_name": "",
        "father_name": "",
        "nrc": "",
        "address": "",
        "phone": "",
        "purchase_reason" : "",
        "monthly_income": 0,
        "already_ordered": 0,
        "term_condition": 0
    };

    const [nrcs, setNrcs] = useState([]);
    const [nrcRegions, setNrcRegions] = useState([]);
    const [nrcTownships, setNrcTownships] = useState([]);
    const [formData, setFormData] = useState(defaultData);

    // Fetch nrcs
    const fetchNrcs = async () => {
        try {
            let res = await getNrcData();
            setNrcs(res);
            let regions = Array.from(new Set(res.map(({ nrc_code }) => nrc_code)))
            setNrcRegions(regions);
        } catch (err) {
            console.log(err)
        }
    }

    // Filter townships
    const filterNrcTownships = (e) => {
        let townships = nrcs.filter( item => item.nrc_code === e);
        setNrcTownships(townships);
    }

    useEffect(() => {
        fetchNrcs();
    }, []);

    // Handle on change 
    function handleOnChange (e) {
        setFormData((prev) => {
           return {
            ...prev,
            [e.target.name] : e.target.value
           };
        })
        console.log(formData)
    }

    return (
        <Container className='mb-3'>
            <Form>
            <Row>
                <Col xs={6}>
                    <Form.Group>
                        <Form.Label className="order-label">ဝယ်သူအမည် (Buyer’s Name)</Form.Label>
                        <Form.Control name='buyer_name' onChange={(e)=> handleOnChange(e)}></Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group>
                        <Form.Label className="order-label">အဘအမည် (Father’s Name)</Form.Label>
                        <Form.Control name='father_name' className='test' onChange={ (e) => handleOnChange(e) }></Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Form.Label className="order-label">နိုင်ငံသားစိစစ်ရေးအမှတ် (NRC) *</Form.Label>
                    <Form.Group>
                        <Row>
                            <Col xs={3}>
                                <Form.Select onChange={(e) => filterNrcTownships(e.target.value) }>
                                    {
                                        nrcRegions.map( item => <option value={item}>{item}</option>)
                                    }
                                </Form.Select>
                            </Col>
                            <Col xs={3}>
                                <Form.Select>
                                {
                                    nrcTownships.map( item => <option value={item}>{item.township_mm}</option>)
                                }
                                </Form.Select>
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