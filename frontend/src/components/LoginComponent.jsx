import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

export default function LoginComponent() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className='d-grid gap-2'>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </div>
        </Form>
    )
}