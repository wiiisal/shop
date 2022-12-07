import React, { Component } from 'react'
import data from '../Data'
import App from '../App'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


export default class Overview extends Component {
  constructor() {
    super()
    this.state = {
      arr: [],
      name: "",
      price: "",
      description: "",
      imageselected: [],
      quantity: "",
      rating: "",
      show: false,
      newdata:{}



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
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state)
  }
  async handleSave(e){
    var ob
    e.preventDefault();
    const {name,description,price,rating,url,quantity,newdata,imageselected}=this.state
    const formData = new FormData()
    formData.append("file", imageselected)
    formData.append('upload_preset', 'ml_default')
    await axios.post('http://api.cloudinary.com/v1_1/dggq70qck/upload', formData).then((res)=>{
    ob={
      name:name,
      description:description,
      price:price,
      rating:rating,
      url:res.data.url,
      quantity:quantity

    }
    
  })
    this.setState({newdata:ob})
    sessionStorage.setItem("data",JSON.stringify(ob))
  
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
        <Form.Control type="text" placeholder="describe your product" name="description" onChange={(e)=>this.handleChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter your price" name="price" onChange={(e)=>this.handleChange(e)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image url</Form.Label>
        <input type="file" accept="image/*,.mp4" name="image-upload" id="input" onChange={(event) => this.setState({ imageselected: event.target.files[0] })} />
                      <div className="label">
                        <label className="image-upload" htmlFor="input">
                          <i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter your quantity" name="quantity" onChange={(e)=>this.handleChange(e)}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>raiting</Form.Label>
        <Form.Control type="number" placeholder="Enter your raiting" name="rating" onChange={(e)=>this.handleChange(e)}/>
        
       
      </Form.Group>
      
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={(e)=>this.handleSave(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }
}

