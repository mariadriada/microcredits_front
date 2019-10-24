import React, { Component } from 'react'
import Layout from "../Layout"
import { Container, Form, Col, Row, Button, Alert } from "react-bootstrap"

export default class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: false,
            errorMessage: ""
        }
    }

    click = (e) => {
        e.preventDefault()
        let data = {}
        // Validate password
        if(e.target.elements[4].value === e.target.elements[5].value){
            data.nombre = e.target.elements[0].value
            data.apellido = e.target.elements[1].value
            data.cedula = e.target.elements[2].value
            data.email = e.target.elements[3].value
            data.clave = e.target.elements[4].value
        }
        else{
            console.log("Passwords not match")
            this.setState({
                error: true,
                errorMessage: "Passwords not match"
            })
        }
        console.log("Form Sign up: ", data)
    }

    render() {
        return (
            <Layout>
                <Container>
                    {
                    this.state.error &&
                    <Alert variant="danger" onClose={() => this.setState({error: false})} dismissible >
                        Error: {this.state.errorMessage}
                    </Alert>
                    }
                    <Form onSubmit={(e) => this.click(e) }>
                        <Row>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="input" required placeholder="Enter your name" />
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Last Name: </Form.Label>
                                <Form.Control type="input" required placeholder="Enter your last name" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Cedula: </Form.Label>
                                <Form.Control type="number" required placeholder="Enter your Cedula" />
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Email: </Form.Label>
                                <Form.Control type="email" required placeholder="Enter your email" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type="password" required placeholder="Enter your name" />
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group>
                                <Form.Label>Confirm tpassword: </Form.Label>
                                <Form.Control type="password" required placeholder="Enter your password" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row align="center">
                            <Col>
                                <Button type="submit" >
                                    Send
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Layout>
        )
    }
}

