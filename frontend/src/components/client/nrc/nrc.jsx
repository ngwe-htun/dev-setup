import { Col, Container, Form, Row } from "react-bootstrap";
import { clientTitle } from "../../../config/clientTitles";
import "../../../App.css";
import { useEffect, useState } from "react";
import { getNrcData } from "../../../services/ClientService";

export const NrcField = ({callback}) => {

    const categories = [
        {
            "name_mm": "နိုင်",
            "name_en": "N",
        }
    ];
    
    // States
    const [nrcs, setNrcs] = useState([]);
    const [region, setRegion] = useState('');
    const [township, setTownship] = useState('');
    const [category, setCategory] = useState('');
    const [nrcRegions, setNrcRegions] = useState([]);
    const [nrcTownships, setNrcTownships] = useState([]);
    const [nrcNumber, setNrcNumber] = useState('');

    // Fetch nrcs
    const fetchNrcs = async () => {
        try {
            let res = await getNrcData();
            setNrcs(res);
            let regions = Array.from(new Set(res.map(({ nrc_code }) => nrc_code)))
            console.log(regions)
            setNrcRegions(regions);
        } catch (err) {
            console.log(err)
        }
    }

    // Filter townships
    const filterNrcTownships = (e) => {
        let townships = nrcs.filter(item => item.nrc_code === e);
        setNrcTownships(townships);
    }

    useEffect(() => {
        let nrc = region + "/" + township + "(" + category + ")" + nrcNumber;
        callback(nrc);
    }, [region, township, category, nrcNumber, callback])

    useEffect(() => {
        fetchNrcs();
    }, [])
    
    return (
        <Container className="mt-3">
            <Row className="justify-content-center custom-form-input">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <Row>
                        <Form.Label>
                            {clientTitle.nrc_title}
                            <span className="required-star">*</span>                        
                        </Form.Label>
                        <Col lg={2}>
                            <Form.Select value={region} onChange={(e)=> {setRegion(e.target.value); filterNrcTownships(e.target.value)}}>
                                <option key={""}></option>
                                {
                                    nrcRegions.map(item => 
                                        <option key={item} value={item}>{item}</option>
                                    )
                                }
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Select value={township} onChange={(e)=>setTownship(e.target.value)}>
                                <option key={""}></option>
                                {
                                    nrcTownships.map(item => <option key={item.township_en} value={item.township_en}>{item.township_mm}</option>)
                                }
                            </Form.Select>
                        </Col>
                        <Col lg={2}>
                            <Form.Select value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option key={""}></option>
                                {
                                    categories.map(item => <option key={item.name_en} value={item.name_en}>{item.name_mm}</option>)
                                }
                            </Form.Select>
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="text" onChange={(e)=>setNrcNumber(e.target.value)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}