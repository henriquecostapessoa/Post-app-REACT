import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import Navigation from "./Navigation"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          
        };
      }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        this.setState({
            posts: response
          })
          
        })
        .catch(err=>console.log(err))
    }

componentDidMount2() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(response => {
    this.setState({
        mypost: response
      })
      
    })
    .catch(err=>console.log(err))
}

myfunction(title, body, userId) {

            
}


    render() {
        
        const posts = this.state.posts.map((post, index)=>{
            return (
                <div key={index}>
                <div>
                <h1>{post.title}</h1>   
                <p>{post.body}</p>
                </div>
                </div>
            )
        })
        return (
            <div>
            <Navigation/>
            {posts}
            <div>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>userId</Form.Label>
                <Form.Control type="title" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Post here...</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            </Form>
            </div>
            <div>
            <footer>
            <p>&copy; 2020  | All Rights Reserved</p>
            </footer>
            </div>
            </div>
        )
    
    }
}


