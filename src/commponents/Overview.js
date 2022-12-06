import React, { Component } from 'react'
import data from '../Data'
import App from '../App'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default class Overview extends Component {
  constructor() {
    super()
    this.state = {
      arr: [],
      name: "",
      price: "",
      description: "",
      url: "",
      quantity: "",
      rating: "",
      show: false,




    }
  }
  componentDidMount() {
    this.setState({ arr: data })
  }
  handleShow(){
    this.setState({show:true})
  }
  handleClose(){
    this.setState({show:false})
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value });
console.log(this.state,'ddddsd')
  }
  handleSave(){
    const {name,price,description,url,quantity,rating,arr}=this.state
    const obj={
      name:name,
      price:price,
      decription:description,
      url:url,
      quantity:quantity,
      rating:rating
    }
    this.setState({arr:arr.push(obj)})
console.log(this.state,'rrrrrrrrr')
  
  }
  render() {
    return (
      <div>
        {console.log(this.state.show)}
        <App adem={this.state.arr} />
        <Button variant="primary" onClick={()=>this.handleShow()}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={()=>this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name product" name="name" onChange={(e)=>this.handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="describe your product" name="description" onChange={(e)=>this.handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter your price" name="price" onChange={(e)=>this.handleChange(e)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image url</Form.Label>
        <Form.Control type="text" placeholder="Enter your image url" name="url" onChange={(e)=>this.handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter your quantity" name="quantity"onChange={(e)=>this.handleChange(e)}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>raiting</Form.Label>
        <Form.Control type="number" placeholder="Enter your raiting" name="raiting" onChange={(e)=>this.handleChange(e)}/>
        
       
      </Form.Group>
      
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>this.handleSave()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }
}

