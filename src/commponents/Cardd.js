import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';


export default function Cardd({product}) {
return (
    <Card style={{ width: '18rem' }} className="cardd">
    <Card.Img variant="top" src={product.url} />
    <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        
        <Card.Text>
            {product.description}
         </Card.Text>
         <Card.Text>{product.price}</Card.Text>

        <ReactStars
    count={5}
    value={product.rating}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Body>
    </Card>
    
  )
}
