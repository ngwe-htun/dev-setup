import "./home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clientTitle } from "../../../config/clientTitles";
import AppBar from "../../../components/client/appbar/AppBar";
import { Card, Col, Container, Figure, Row } from "react-bootstrap";
import { getAvailableCategories } from "../../../services/CategoryService";

// CLient home page
export default function Home({setAvailable}) {

    // Consts
    const goldCoin = 'gold_coin';
    const goldBar = 'gold_bar';
    const jade = 'jade';
    const gem = 'gem';
    const navigate = useNavigate();
    const disableClass = 'disabled';

    // States
    const [barDisable, setBarDisable] = useState(disableClass);
    const [gemDisable, setGemDisable] = useState(disableClass);
    const [jadeDisable, setJadeDisable] = useState(disableClass);
    const [coinDisable, setCoinDisable] = useState(disableClass);
    const [categories, setCategories] = useState([]);

    const fields = {
        "gem": setGemDisable,
        "jade": setJadeDisable,
        "gold_bar": setBarDisable,
        "gold_coin": setCoinDisable
    };

    // Fetch available categories
    const fetchCategories = async () => {
        try {
            let ca = [];
            let res = await getAvailableCategories();
            console.log(res);
            res.forEach(e => {
                let toCheck = e.name_en;
                ca[toCheck] = e.id;
                if (e.parent_category) {
                    toCheck = e.parent_category.name_en;
                    ca[toCheck] = e.parent_category.id;
                }
                if(toCheck in fields) {
                    console.log(fields);
                    fields[toCheck]('');
                }
            });
            console.log(barDisable);
            setCategories(ca);

        } catch (err) {

        }
    }

    // Navigate
    const naviageTo = (path, categoryName) => {
        console.log(categories);
        let itemId = categories[categoryName];
        navigate(path, 
            {
                state: { 
                    categoryId: itemId
                }
            }
        );
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <>
        <AppBar 
            titleEng={clientTitle.home_title_en} 
            titleMm={clientTitle.home_title_mm} 
        />
        <Container className="mt-4 home">
            <Row className="pt-3 justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12} className="pt-3">
                    <Row>
                        {/** Gold coin */}
                        <Col lg={3} md={4} sm={6} xs={6}>
                            <Card className={`${coinDisable} text-center`} onClick={()=> naviageTo('/gold', goldCoin)}>
                                <Card.Body>
                                    <Figure.Image
                                        src="gold.png"
                                    />
                                    <div className="home-category-title">
                                        <p>{clientTitle.home_gold_coin_mm_title}</p>
                                        <p>{clientTitle.home_gold_coin_en_title}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/** Pure gold */}
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className={`${barDisable} text-center`} onClick={()=> naviageTo('/puregold', goldBar)}>
                                <Card.Body>
                                    <Figure.Image
                                        src="gold_1.png" 
                                    />
                                    <div className="home-category-title">
                                        <p>{clientTitle.home_gold_pure_mm_title}</p>
                                        <p>{clientTitle.home_gold_pure_en_title}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/** Jade */}
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className={`${jadeDisable} text-center`} onClick={()=> naviageTo('/jade', jade)}>
                                <Card.Body>
                                    <Figure.Image
                                        src="jade.png" 
                                    />
                                    <div className="home-category-title">
                                        <p>{clientTitle.home_jade_mm_title}</p>
                                        <p>{clientTitle.home_jade_en_title}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/** Gem */}
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className={`${gemDisable} text-center`} onClick={()=> naviageTo('/gem', gem)}>
                                <Card.Body>
                                    <Figure.Image
                                        src="gem.png" 
                                    />
                                    <div className="home-category-title">
                                        <p>{clientTitle.home_gem_mm_title}</p>
                                        <p>{clientTitle.home_gem_en_title}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    );
}