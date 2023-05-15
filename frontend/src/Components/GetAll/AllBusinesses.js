import React, {useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import "./style.css"

export default function AllBusinesses() {
  // get business
  const [business, setBusiness] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8070/business/")
      .then((response) => {
        setBusiness(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <div>
        <h2 className="" style={{margin: "2rem"}}>All Businesses</h2>
        <div className="card_flex">
          {business.map((business) => (
            <div key={business._id}>
              <Card style={{width: "18rem", height: "20rem"}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{business.busname}</Card.Title>
                  <div className="card_overflow">
                    <Card.Text>{business.busDetails}</Card.Text>
                  </div>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">Finance: {business.finance}</Card.Subtitle>
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
