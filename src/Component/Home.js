import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import Navigation from "./Navigation"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          title:"",
          body:"",
          userId:"",
          mypost:{},
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

handleChange = (e) => {
  e.preventDefault();
  //console.log(this.state);
  this.setState({[e.target.name]: e.target.value});
  
}

handleSubmit = (e) =>{
  e.preventDefault();
  
  var body = JSON.stringify({
    title: this.state.title,
    body: this.state.body,
    userId: this.state.userId,
  })
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
          
      
        .catch(err=>console.log(err))

  this.props.history.push('/home');

  };


    render() {
      console.log(this.state.mypost)
        const posts = this.state.posts.map((post, index)=>{
            return (
                <div key={index}>
                <div className="customPosts">
                <h1>{post.title}</h1> 
                </div>  
                <div className="customPosts">
                <p>{post.body}</p>
                </div>
                </div>
            )
        })
        return (
            <div>
            <Navigation/>
            
            {posts}
            
            <div className="customMyPost">
            <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control id="title" name="title" value={this.state.title} type="title" placeholder="title" onChange={e => this.handleChange(e) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>userId</Form.Label>
                <Form.Control id="userId" name="userId" value={this.state.userId} type="userId" placeholder="User Id" onChange={e => this.handleChange(e) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Post here...</Form.Label>
                <Form.Control id="body" name="body" value={this.state.body} as="textarea" rows="3" placeholder="" onChange={e => this.handleChange(e) } />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Form>
            </div>
            
            <footer>
            <p>&copy; 2020  | All Rights Reserved</p>
            </footer>
            
            </div>
        )
    
    }
}


