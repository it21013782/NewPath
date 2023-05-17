import React, {useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import jsPDF from "jspdf";
import "./style.css"

export default function AllVolunteer() {
  //Model
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const downloadPDF = (volunteer) => {
    const doc = new jsPDF();
    
    doc.text(`Business Name: ${volunteer.project}`, 10, 10);
    doc.text(`Business Owner's Name : ${volunteer.venue}`, 10, 20);
    doc.text(`Email : ${volunteer.neartown}`, 10, 30);
    doc.text(`Phone Number : ${volunteer.date}`, 10, 30);
    doc.text(`Business Type : ${volunteer.description}`, 10, 30);
    doc.text(`Annual Revenue : ${volunteer.name}`, 10, 30);
    doc.text(`Struggling Business Details : ${volunteer.contactno}`, 10, 30);
    
    doc.save("volunteer_report.pdf");
  };

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
                <Button variant="primary" onClick={handleShow}>View</Button>
              </Card>
              <div>
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>{volunteer.project}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Business Owner's Name : {volunteer.venue}</Modal.Body>
                <Modal.Body>Address : {volunteer.neartown}</Modal.Body>
                <Modal.Body>Email : {volunteer.date}</Modal.Body>
                <Modal.Body>Phone Number : {volunteer.description}</Modal.Body>
                <Modal.Body>Business Type : {volunteer.name}</Modal.Body>
                <Modal.Body>Annual Revenue : {volunteer.contactno}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => downloadPDF(volunteer)}>
                    Download PDF
                  </Button>
                </Modal.Footer>
              </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
