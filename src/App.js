import Carousel from 'react-bootstrap/Carousel';
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React ,{ useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Card from './commponents/Cardd';
import Navbarr from "./commponents/Navbarr"
import DATA from "./Data"
import { useEffect } from 'react';



function App({adem}) {
  const [ID, setID] = useState(0);
  const [name ,setName] = useState("")
 const [data, setData] = useState(DATA)
  
 
  
        const show=(index) => {
           if ( index !== ID)
           
          setID(index)
            };
             useEffect(()=>{

             const datafiltred=data.filter((element)=>  
                        `${element.name}`.includes(name)
                  
                )
                setData(datafiltred)
            })




  return (
    <Container>
      <Navbarr getText ={(event) => setName(event)}/>
     <Row className='head'>
        <Col>
          <Carousel className='mycarousel' onSlide={show}>
                  { adem.map((element)=>(
                      <Carousel.Item key={element.Id}>
                        <img className="myImage" src={element.url} alt="First slide"/>
                        
                      </Carousel.Item> 
                      )) }
          </Carousel>

        </Col>

        <Col >   
        {adem.map((el,index)=>(
        index===ID? <h2 className='mytitle'>
          {el.description}
          <ReactStars
    count={5}
    value={el.rating}
    size={24}
    activeColor="#ffd700"
  />
        </h2>:null
        ))}
        </Col>
       
   
      </Row>
<Row>
<Col>
<div className='myclassname'>
{data.map(element => <Card product = {element} />)}
</div>
</Col>

</Row>
     
</Container>
)}


export default App;