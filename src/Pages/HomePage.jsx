import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {Link} from "react-router-dom";
import pics from "../data/data.jsx";



export default function HomePage() {
  return (
    <Row className='justify-content-end  mx-auto'>
    {
        pics.map((p)=>{
            return(
                <Col  className='p-2 col-3  w-20 ' key={p.no}>
                <Link to={`/${p.no}`}>
                    <img src={p.pic} className='img-fluid w-100' />
                </Link>
                </Col>
            )
        })
    }
    
    </Row>
  )
}
