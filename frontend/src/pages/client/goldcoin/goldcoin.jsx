import "../../../App.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { clientTitle } from "../../../config/clientTitles";
import { getCityList } from "../../../services/CityService";
import AppBar from "../../../components/client/appbar/AppBar";
import { checkAvailability } from "../../../services/ClientService";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getSubCategories } from "../../../services/CategoryService";

// Gold coin page
export const GoldCoin = () => {

    // Consts
    const categoryId = useOutletContext();

    // States
    const [city, setCity] = useState('');
    const [date, setDate] = useState("");
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
            let res = await getSubCategories(categoryId, true);
            setCategories(res);
        } catch (err) {
            console.log(err)
        }
    }

    // Check availible
    const check = async (e) => {
        try {
            e.preventDefault();
            let res = await checkAvailability(category, city, date);
            setNotAvailableAlert('');
            navigate('/gold/order', {
                state: {
                    "itemId": category,
                    "cityId": city
                }
            });
        } catch (err) {
            setNotAvailableAlert(err.message);
        }
    }

    // Fetch data
    useEffect( () => {
        fetchCities();
        fetchCategories();
    }, []);

    return (
        <>
        <AppBar 
            titleMm={clientTitle.gold_appbar_title_mm}
            titleEng={clientTitle.gold_appbar_title_en}
        />
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col sm={10} lg={8} md={8} xs={12}>
                    <Form onSubmit={(e)=>{ check(e); }}>
                        
                        {/** City form group */}
                        <Form.Group>
                            <Form.Label>
                                {clientTitle.select_city_label}
                                <span className="required-star">*</span>
                            </Form.Label>
                            <Form.Select required onChange={(e) => setCity(e.target.value)} value={city}>
                                <option></option>
                                {
                                    cities.map(item =>  <option key={item.id} value={item.id}>{item.display_name}</option>)
                                }
                            </Form.Select>
                        </Form.Group>

                        {/** Type form group */}
                        <Form.Group className="mt-3">
                            <Form.Label>
                                {clientTitle.gold_coin_type_label} 
                                <span className="required-star">*</span>                        
                            </Form.Label>
                            <Form.Select onChange={ (e) => { console.log(e);setCategory(e.target.value) }} value={category}>
                                <option value={city}></option>
                                {
                                    categories.map( item => 
                                        <option key={item.id} value={item.id}>{item.name_mm}</option> 
                                    )
                                }
                            </Form.Select>
                        </Form.Group>

                        {/** Date form group */}
                        <Form.Group className="mt-3">
                            <Form.Label>
                                {clientTitle.date_label}
                                <span className="required-star">*</span>                        
                            </Form.Label>
                           <Form.Control type="date" onChange={(e) => setDate(e.target.value) }  value={date}/>
                        </Form.Group>

                        {/** If not available */}
                        { notAvailableAlert ? <p className="text-danger">{notAvailableAlert}</p> : null }

                        <div className="text-center">
                            <Button 
                                className="mt-4"
                                type="submit"
                                disabled={!(city && category && date)}
                            >
                                {clientTitle.button_next_label}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
}