import React, {useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import "./style.css"

export default function AllInnovator() {
    // get business
    const [innovator, setInnovator] = useState([])
  
    useEffect(() => {
      axios
        .get("http://localhost:8070/innovator/")
        .then((response) => {
            setInnovator(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])
  
    return (
      <div>
        <div>
          <h2 className="" style={{margin: "2rem"}}>All Innovators</h2>
          <div className="card_flex">
            {innovator.map((innovator) => (
              <div key={innovator._id}>
                <Card style={{width: "18rem", height: "20rem"}}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title>{innovator.name}</Card.Title>
                    <div className="card_overflow">
                      <Card.Text>{innovator.problem}</Card.Text>
                    </div>
                    <br />
                    <Card.Subtitle className="mb-2 text-muted">Finance: {innovator.solution}</Card.Subtitle>
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