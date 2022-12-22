import { Col, Container, Figure, Row } from "react-bootstrap";

const AppBar = ({titleEng, titleMm}) => {
    return (
        <Container className="mt-7">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12} className="text-center">
                    <Figure>
                        <Figure.Image src="/logo.png" />
                    </Figure>
                </Col>
                <Col lg={8} md={8} sm={10} xs={12} className="text-center">
                    <h2>{titleMm}</h2>
                    <h3>{titleEng}</h3>
                </Col>
            </Row>
        </Container>
    );
}


export default AppBar;