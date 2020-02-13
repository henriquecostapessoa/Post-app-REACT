import React, { Component } from 'react'

export default class Home extends Component {

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        this.setState({
            posts: response.posts
          })
          console.log(this.setState.posts)
        })
        .catch(err=>console.log(err))
    }



    render() {
        return (
            <div>
                
            </div>
        )
    }
}


