import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import axios from "axios"

export default function AddBusiness() {
  //add voluteer
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
    axios
      .post("http://localhost:8070/volunteer/add", {
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
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Project name</Form.Label>
            <Form.Control name="busname" value={busname} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Project Description</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" name="finance" value={finance} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Venue</Form.Label>
            <Form.Control name="owner" value={owner} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Nearest Town</Form.Label>
            <Form.Control name="email" value={email} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control name="revenue" value={revenue} onChange={handleChange} />
          </Form.Group>
              </Row>
              
              <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Date</Form.Label>
            <Form.Control name="email" value={email} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control name="revenue" value={revenue} onChange={handleChange} />
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
  )
}
