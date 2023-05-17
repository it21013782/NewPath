import React, {useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import "./style.css"

export default function Innovator() {
  
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

  const [successMsg, setSuccessMsg] = useState("")

  //delete innovator
  const deleteInnovator = (id) => {
    if (window.confirm("Are you sure you want to delete this innovator?")) {
      axios.delete(`http://localhost:8070/innovator/delete/${id}`).then((response) => {
        const del = innovator.filter((innovator) => id !== innovator._id)
        setInnovator(del)
        setSuccessMsg("Innovator Deleted")
      })
    }

}

return (
    <div>
    {successMsg && <h5>{ successMsg }</h5>}
    <div>
        <h2 className="" style={{margin: "2rem"}}>All Innovator</h2>
        <div className="card_flex">
        {innovator.map((innovator) => (
            <div key={innovator._id}>
            <Card style={{width: "18rem", height: "20rem"}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                <Card.Title>{innovator.name}</Card.Title>
                <div className="card_overflow">
                    <Card.Text>{innovator.description}</Card.Text>
                </div>
                <br />
                <Card.Subtitle className="mb-2 text-muted">Finance: {innovator.email}</Card.Subtitle>
                </Card.Body>
                <Button variant="danger" onClick={() => deleteInnovator(innovator._id)}>Delete</Button>
            </Card>
            </div>
        ))}
        </div>
    </div>
    </div>
)
}