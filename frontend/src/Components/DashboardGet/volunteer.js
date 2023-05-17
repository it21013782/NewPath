import React, {useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import "./style.css"

export default function Volunteer() {
  // get business
  const [volunteer, setVolunteer] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8070/volunteer/")
      .then((response) => {
        setVolunteer(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const [successMsg, setSuccessMsg] = useState("")

  //delete volunteer
  const deleteVolunteer = (id) => {
    if (window.confirm("Are you sure you want to delete this volunteer?")) {
      axios.delete(`http://localhost:8070/volunteer/delete/${id}`).then((response) => {
        const del = volunteer.filter((volunteer) => id !== volunteer._id)
        setVolunteer(del)
        setSuccessMsg("Volunteer Deleted")
      })
    }
  }

  //Search
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVolunteer = volunteer.filter((volunteer) =>
  volunteer.project && volunteer.project.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>

    <div className="col-2" style={{ marginLeft: "3rem" }}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Business"
          style={{ padding: "0.7rem", margin: "2rem 0" }}
        />
      </div>

      {successMsg && <h5>{ successMsg }</h5>}
      <div>
        <h2 className="" style={{margin: "2rem"}}>All Volunteer</h2>
        <div className="card_flex">
          {filteredVolunteer.map((volunteer) => (
            <div key={volunteer._id}>
              <Card style={{width: "18rem", height: "20rem"}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{volunteer.project}</Card.Title>
                  <div className="card_overflow">
                    <Card.Text>{volunteer.description}</Card.Text>
                  </div>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">Finance: {volunteer.venue}</Card.Subtitle>
                </Card.Body>
                <Button variant="danger" onClick={() => deleteVolunteer(volunteer._id)}>Delete</Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
