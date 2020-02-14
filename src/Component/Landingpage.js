import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
export default function Landingpage() {

    return (
        <div>
          <div className="container">
            <img className="bg-image" src="/images/15_formas-posts-criativos_Img_destacada.png" alt="Trulli"/>
            <Button className="btn" variant="warning"> <Link id="link1"to="/home">CLIQUE AQUI</Link> </Button> 
          </div>
        </div>
    )
}
