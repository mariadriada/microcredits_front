import React, { Component } from 'react'
import { Form, Button, Col, Row } from "react-bootstrap"
import Layout from "../Layout"
import "./style.scss"

export default class Home extends Component {

    // Validate login
    click = (e) => {
        e.preventDefault()
        //Get data 
        const user = e.target.elements[0].value
        const password = e.target.elements[1].value

        console.log("User", user, "Pass", password)
        // TODO: Get request to API

        console.log(this)
        // Go to users
       // this.props.history.push("/users")
    }

    render() {
        return (
            <Layout>
                <div className="home">
                <h2>Login</h2>
                <Form className="col-12" onSubmit={(e)=>this.click(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                    <Button variant="secondary" type="button" onClick={ 
                        () => this.props.history.push("/sign-up")} >
                        Sign up
                    </Button>
                    <a href="/sign-up">sign up</a>
                </Form>
                </div>
            </Layout>
        )
    }
}
