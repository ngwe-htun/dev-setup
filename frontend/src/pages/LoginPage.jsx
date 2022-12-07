import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginComponent from "../components/LoginComponent";

function LoginPage() {
    return (
        <Container>
            <Row className="mt-3">
                <Col/>
                <Col className="card p-4">
                    <LoginComponent />
                </Col>
                <Col/>
            </Row>
        </Container>
    );
}

export default LoginPage;