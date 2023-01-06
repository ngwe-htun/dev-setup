import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export const ClientBack = ({label, path}) => {
    
    const navigate = useNavigate();

    const goBack = () => {
        navigate(path)
    }

    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col lg={8} md={8} sm={10} xs={12}>
                    <div className="d-flex">
                        <i className="pi pi-arrow-left pt-3"  onClick={() => goBack()}></i>
                        <p className="text-muted pl-3 align-items-center">
                            {label.mm} {label.en}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}