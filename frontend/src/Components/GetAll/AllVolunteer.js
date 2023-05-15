import React, {useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import "./style.css"

export default function AllVolunteer() {
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

  return (
    <div>
      <div>
        <h2 className="" style={{margin: "2rem"}}>All Volunteer</h2>
        <div className="card_flex">
          {volunteer.map((volunteer) => (
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
                <Button variant="primary">View</Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
