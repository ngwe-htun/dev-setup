import { useEffect, useState } from "react";
import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";
import { Link, Route, useNavigate } from "react-router-dom";
import { getSubCategories } from "../../../services/CategoryService";
import { getCitiesForClient, getCityList } from "../../../services/CityService";
import { checkAvailability } from "../../../services/ClientService";


export const GoldCoin = () => {

    const [city, setCity] = useState('');
    const [date, setDate] = useState(null);
    const [cities, setCities] = useState([]);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [notAvailableAlert, setNotAvailableAlert] = useState('');

    const navigate = useNavigate();

    // Fetch cities
    const fetchCities = async () => {
        try {
            let res = await getCityList(true);
            setCities(res);
        } catch (err) {
            console.log(err)
        }
    }

    // Fetch categories
    const fetchCategories = async () => {
        try {
            let res = await getSubCategories(1, true);
            setCategories(res);
        } catch (err) {
            console.log(err)
        }
    }

    // Check availible
    const check = async (e) => {
        try {
            e.preventDefault();
            let res = await checkAvailability(category, city,date);
            clear();
            setNotAvailableAlert('');
            navigate('/gold/order');
        } catch (err) {
            clear();
            setNotAvailableAlert(err.message);
            console.log(err.message)
        }
    }

    // Clear form 
    const clear = () => {
        setDate('');
        setCity('');
        setCategory('');
    }

    useEffect( () => {
        fetchCities();
        fetchCategories();
    }, []);

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
                <Form style={{paddingLeft:"30px", paddingRight: "30px"}} onSubmit={(e)=>{ check(e); }}>
                    <Form.Group style={{paddingBottom: "16px"}}>
                        <Form.Label style={{
                            fontSize: "14px"
                        }}>
                            ဝယ်ယူလိုသည့်မြို့ (Select City) 
                            <span style={{color: "#FF0000"}}> *</span>
                        </Form.Label>
                        <Form.Select required style={{height: "40px"}} onChange={(e) => setCity(e.target.value)}>
                            {
                                cities.map(item =>  <option value={item.id}>{item.display_name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group style={{paddingBottom: "16px"}}>
                        <Form.Label style={{
                            fontSize: "14px"
                        }}>
                            ဝယ်ယူလိုသည့် ရွှေဒင်္ဂါးပြားအမျိုးအစား (Type of Gold Coin) 
                            <span style={{color: "#FF0000"}}> *</span>
                        </Form.Label>
                        <Form.Select required={true} style={{height: "40px"}} onChange={ (e) => {console.log(e.target.value);setCategory(e.target.value) }} >
                            {
                                categories.map( item => 
                                    <option value={item.id}>{item.name_mm}</option> 
                                )
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group style={{paddingBottom: "16px"}}>
                        <Form.Label style={{
                            fontSize: "14px"
                        }}>
                            ဝယ်ယူလိုသည့် ရက်စွဲ (Select Date)
                            <span style={{color: "#FF0000"}}> *</span>
                        </Form.Label>
                       <Form.Control type="date" onChange={(e) => setDate(e.target.value) }  />
                    </Form.Group>

                    {/** If not available */}
                    { notAvailableAlert ? <p className="text-danger">{notAvailableAlert}</p> : null }

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
                    }} >
                        Next
                    </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
    );
}