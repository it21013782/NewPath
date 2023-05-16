import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import axios from "axios"

export default function AddVolunteerForm() {
  //add voluteer
  const [formData, setFormData] = useState({
    project: "",
    venue: "",
    neartown: "",
    date: "",
    description: "",
    name: "",
    contactno: "",
  })

  const {project, venue, neartown, date, description, name, contactno} = formData

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
        project,
        venue,
        neartown,
        date,
        description,
        name,
        contactno,
      })

      .then((res) => {
        setSuccessMsg("Volunteer Added")
      })
      .catch((err) => {
        console.log(err)
      })

    setFormData({
      project: "",
      venue: "",
      neartown: "",
      date: "",
      description: "",
      name: "",
      contactno: "",
    })
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Project name</Form.Label>
            <Form.Control name="project" value={project} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Project Description</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" name="description" value={description} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Venue</Form.Label>
            <Form.Control name="venue" value={venue} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Nearest Town</Form.Label>
            <Form.Control name="neartown" value={neartown} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control name="name" value={name} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Date</Form.Label>
            <Form.Control name="date" value={date} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control name="contactno" value={contactno} onChange={handleChange} />
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
