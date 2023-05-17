import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import exampleImage5 from '../../Images/Untitled-5.png';
import exampleImage6 from '../../Images/Untitled-6.png';

export default function AddBusiness() {
  // Validation regex patterns
  const phoneRegex = /^[0-9]{10}$/; // 10 digits only
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email pattern

  //add business
  const [formData, setFormData] = useState({
    busname: "",
    owner: "",
    address: "",
    email: "",
    phone: "",
    bustype: "",
    revenue: "",
    busDetails: "",
    finance: "",
  })

  const {busname, owner, address, email, phone, bustype, revenue, busDetails, finance} = formData

  //This is for the success message
  const [successMsg, setSuccessMsg] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate phone number
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (10 digits).");
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    axios
      .post("http://localhost:8070/business/add", {
        busname,
        owner,
        address,
        email,
        phone,
        bustype,
        revenue,
        busDetails,
        finance,
      })
      .then((res) => {
        setSuccessMsg("Business Added")
      })
      .catch((err) => {
        console.log(err)
      })

      setFormData({
          busname: "",
          owner: "",
          address: "",
          email: "",
          phone: "",
          bustype: "",
          revenue: "",
          busDetails: "",
          finance: "",
      })
  }

  return (
    <div className="Maincontainer">
    <div style={{ paddingBottom: '100px' }}>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage5} 
          alt="Forth slide"
          style={{ width: '100%', height: '500px'}}
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage6} 
          alt="Forth slide"
          style={{ width: '100%', height: '500px'}}
        />
      </Carousel.Item>

    </Carousel>
    
    </div>

    <div className="container">

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Business Name</Form.Label>
            <Form.Control name="busname" value={busname} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Business Type</Form.Label>
            <Form.Control name="bustype" value={bustype} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Struggling Business Details</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" name="busDetails" value={busDetails} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Business Owner's Name</Form.Label>
            <Form.Control name="owner" value={owner} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Current Financial Arrangement</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" name="finance" value={finance} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" value={address} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={email} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Annual Revenue</Form.Label>
            <Form.Control name="revenue" value={revenue} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control name="phone" value={phone} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
          </Form>
          
          <div className="vd_successmessage" style={{textAlign: "center"}}>
          {successMsg && <h5>{successMsg}</h5>}
        </div>
    </div>
    </div>
  )
}
