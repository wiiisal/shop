import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';


export default function Cardd({product, newdata}) {
  const deleteProduct=(id)=>{
      product.map(element=>{
        if (id === element.id){
          product.splice(id,1)
        }
      })
  }
return (
  <div className="cardd">
    <>
    {product.map(element=>{
      return(
        <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={element.url} />
    <Card.Body>
        <Card.Title>{element.name}</Card.Title>
        
        <Card.Text>
            {element.description}
         </Card.Text>
         <Card.Text>{element.price}</Card.Text>

        <ReactStars
    count={5}
    value={element.rating}

    size={24}
    activeColor="#ffd700"
  />
  <button onClick={()=>deleteProduct(element.id)}>
    Delete
  </button>
    </Card.Body>
    </Card>
      )
    })}
    
</>
<>
{/* <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={newdata.url} />
    {console.log(newdata)}
    <Card.Body>
        <Card.Title>{newdata.name}</Card.Title>
        
        <Card.Text>
            {newdata.description}
         </Card.Text>
         <Card.Text>{newdata.price}</Card.Text>

        <ReactStars
    count={5}
    value={newdata.rating-""}
    size={24}
    activeColor="#ffd700"
  />
    </Card.Body>
    </Card> */}
    </>
    </div>
    
  )
}
