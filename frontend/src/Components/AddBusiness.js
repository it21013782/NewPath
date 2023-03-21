import React, {useState} from "react";
import axios from "axios";

export default function AddBusiness(){

    const [busname, setbusname] = useState("");
    const [owner, setowner] = useState("");
    const [address, setaddress] = useState("");

    function sendData(e){
        e.preventDefault();

        const newBusiness = {
            busname,
            owner,
            address
        }

        axios.post("http://localhost:8070/business/add", newBusiness).then(()=>{
            alert("Business added")
            setbusname("");
            owner("");
            address("");
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
                        setbusname(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="owner">Owner's Name</label>
                    <input type="text" className="form-control" id="owner" placeholder="Enter Owner's Name" onChange={(e)=>{
                        setowner(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" onChange={(e)=>{
                        setaddress(e.target.value);
                    }}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

