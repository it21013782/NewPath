import React, {useState} from "react";
import axios from "axios";

export default function AddBusiness(){

    const [busname, setBusname] = useState("");
    const [owner, setOwner] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bustype, setbustype] = useState("");
    const [noOfEmp, setNoOfEmp] = useState("");
    const [revenue, setRevenue] = useState("");
    const [assistance, setAssistance] = useState("");
    const [busDetails, setBusDetails] = useState("");
    const [finance, setFinance] = useState("");
    const [futureplan, setFutureplan] = useState("");

    function sendData(e){
        e.preventDefault();

        const newBusiness = {
            busname,
            owner,
            address,
            email,
            phone,
            bustype,
            noOfEmp,
            revenue,
            assistance,
            busDetails,
            finance,
            futureplan
        }

        axios.post("http://localhost:8070/business/add", newBusiness).then(()=>{
            alert("Business added")
        }).catch((err)=>{
            alert(err)
        })
    }

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="busname">Business Name</label>
                    <input type="text" className="form-control" id="busname" placeholder="Business Name" onChange={(e)=>{
                        setBusname(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="owner">Owner's Name</label>
                    <input type="text" className="form-control" id="owner" placeholder="Enter Owner's Name" onChange={(e)=>{
                        setOwner(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" onChange={(e)=>{
                        setAddress(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" onChange={(e)=>{
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter Phone" onChange={(e)=>{
                        setPhone(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="bustype">Business Type</label>
                    <input type="text" className="form-control" id="bustype" placeholder="Enter Business Type" onChange={(e)=>{
                        setbustype(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="noOfEmp">No of Employees</label>
                    <input type="text" className="form-control" id="noOfEmp" placeholder="Enter No of Employees" onChange={(e)=>{
                        setNoOfEmp(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="revenue">Revenue</label>
                    <input type="text" className="form-control" id="revenue" placeholder="Enter Revenue" onChange={(e)=>{
                        setRevenue(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="assistance">Type of Assistance Needed</label>
                    <input type="text" className="form-control" id="assistance" placeholder="Enter Type of Assistance Needed" onChange={(e)=>{
                        setAssistance(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="busDetails">Business Details</label>
                    <input type="text" className="form-control" id="busDetails" placeholder="Enter Address" onChange={(e)=>{
                        setBusDetails(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="finance">Current Financial Status</label>
                    <input type="text" className="form-control" id="finance" placeholder="Enter Current Financial Status" onChange={(e)=>{
                        setFinance(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="futureplan">Future Plans</label>
                    <input type="text" className="form-control" id="futureplan" placeholder="Future Plans" onChange={(e)=>{
                        setFutureplan(e.target.value);
                    }}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

