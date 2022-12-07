import { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function NrcComponent () {
    
    const [selected, setSelected] = useState();

    let townships = null;

    const nrcs = [
        {"name": "nrc"},
        {"name": "nrc1"}
    ];

    const lists = {
        "nrc": [
            {
                'name': "aaa"
            }
        ],
        "nrc1": [
            {
                'name': "aaa1"
            }
        ]
    };

    const tet = (item) => {
        setSelected(item.target.value);
    };

    if (selected) {
        townships = lists[selected].map((a) => <option>{a.name}</option>);
    }

    return (
        <Container>
            <Row className="mt-3">
                <Col className="col-lg-2"/>
                <Col className="col-lg-8">
                    <Row>
                        <Col>
                            <Form.Select onChange={tet}>
                                {nrcs.map((a) => <option>{a.name}</option>)}
                            </Form.Select>
                        </Col>
                        <Col>
                        <Form.Select onChange={tet}>
                            {townships}
                        </Form.Select>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                   maxLength={6}
                                   placeholder="nrc number"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-lg-2"/>
            </Row>
        </Container>
    );
}

export default NrcComponent;