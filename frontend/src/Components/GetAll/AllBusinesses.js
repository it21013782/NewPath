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

  //Search
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBusiness = business.filter((business) =>
  business.busname && business.busname.toLowerCase().includes(searchTerm.toLowerCase())
);

  // Download PDF
  const downloadPDF = (business) => {
    const doc = new jsPDF();
    
    doc.text(`Business Name: ${business.busname}`, 10, 10);
    doc.text(`Business Details: ${business.busDetails}`, 10, 20);
    doc.text(`Finance: ${business.finance}`, 10, 30);
    
    doc.save("business_report.pdf");
  };



  
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
      <div>
        <h2 className="" style={{margin: "2rem"}}>All Businesses</h2>
        <div className="card_flex">
          {filteredBusiness.map((business) => (
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
                <Modal.Body>Business Details : {business.busDetails}</Modal.Body>
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
