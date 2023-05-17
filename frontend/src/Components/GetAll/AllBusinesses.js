import React, {useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import jsPDF from "jspdf";
import "./style.css"

export default function AllBusinesses() {
  //Model
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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



  // Download PDF
  const downloadPDF = (business) => {
    const doc = new jsPDF();
  
    
    doc.text(`Business Name: ${business.busname}`, 10, 10);
    doc.text(`Business Owner's Name : ${business.busDetails}`, 10, 20);
    doc.text(`Email : ${business.finance}`, 10, 30);
    doc.text(`Phone Number : ${business.finance}`, 10, 40);
    doc.text(`Business Type : ${business.finance}`, 10, 50);
    doc.text(`Annual Revenue : ${business.finance}`, 10, 60);
    doc.text(`Struggling Business Details : ${business.finance}`, 10, 70);
    doc.text(`Current Financial Arrangement : ${business.finance}`, 10, 80);
    
    doc.save("business_report.pdf");
  };

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
                <Button variant="primary" onClick={handleShow}>View</Button>
              </Card>
              <div>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>{business.busname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Business Owner's Name : {business.owner}</Modal.Body>
                <Modal.Body>Address : {business.address}</Modal.Body>
                <Modal.Body>Email : {business.email}</Modal.Body>
                <Modal.Body>Phone Number : {business.phone}</Modal.Body>
                <Modal.Body>Business Type : {business.bustype}</Modal.Body>
                <Modal.Body>Annual Revenue : {business.revenue}</Modal.Body>
                <Modal.Body>Struggling Business Details : {business.busDetails}</Modal.Body>
                <Modal.Body>Current Financial Arrangement : {business.finance}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => downloadPDF(business)}>
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
