import React from 'react'
import {Carousel, Button} from 'react-bootstrap'
export default function Landingpage() {

  handleclick = (img) => {
    this.setState({modalimage: img, openmodal: true})
  }
    return (
        <div>
          <div class="container">
            <img class="bg-image" src="/images/15_formas-posts-criativos_Img_destacada.png" alt="Trulli"/>
            <Button class="btn" variant="warning">CLIQUE AQUI</Button> 
          </div>
        </div>
    )
}
