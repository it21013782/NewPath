import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import axios from "axios"

export default function AddInnovator() {
    //add Innovator
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      title: "",
      summary: "",
      problem: "",
      solution: "",
      audience: "",
      usp: "",
      curentstage: "",
      awards: "",
    })
  
    const {name, email, phone, company, title, summary, problem, solution, audience, usp, curentstage, awards} = formData
  
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
        .post("http://localhost:8070/innovator/add", {
          name,
          email,
          phone,
          company,
          title,
          summary,
          problem,
          solution,
          audience,
          usp,
          curentstage,
          awards
        })
        .then((res) => {
          setSuccessMsg("Business Added")
        })
        .catch((err) => {
          console.log(err)
        })
  
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            title: "",
            summary: "",
            problem: "",
            solution: "",
            audience: "",
            usp: "",
            curentstage: "",
            awards: ""
        })
    }
  
    return (
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" value={name} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Proposal Title</Form.Label>
              <Form.Control name="title" value={title} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Target Market and Audience</Form.Label>
              <Form.Control name="audience" value={audience} onChange={handleChange} />
            </Form.Group>
          </Row>
  
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={email} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Proposal Summary</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="summary" value={summary} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Unique Selling Proposition (USP)</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="usp" value={usp} onChange={handleChange} />
            </Form.Group>
          </Row>
  
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" value={phone} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Problem Statement</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="problem" value={problem} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Current Stage of Development</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="curentstage" value={curentstage} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Company or Organization</Form.Label>
              <Form.Control name="company" value={company} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Proposed solution</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="solution" value={solution} onChange={handleChange} />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Previous Accomplishment</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="awards" value={awards} onChange={handleChange} />
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