import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

export default class Login extends Component {

    myFunction = () => {
        this.props.history.push("/Home");
      }
    
    render() {
        return (
            <div>
             <Form className="customForm">
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
            <Form.Group>
            <Button variant="primary" type="submit" onClick={this.myFunction}>
                Submit
            </Button>
            </Form.Group>
            <Link to="/signin">Sign in</Link>
            </Form>
            </div>
        )
    }
}
