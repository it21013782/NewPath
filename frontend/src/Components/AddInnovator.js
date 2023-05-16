import React, {useState} from "react";
import axios from "axios";

export default function AddInnovator(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [problem, setProblem] = useState("");
    const [solution, setSolution] = useState("");
    const [audience, setAudience] = useState("");
    const [usp, setUsp] = useState("");
    const [curentstage, setCurentstage] = useState("");
    const [awards, setAwards] = useState("");

    function sendData(e){
        e.preventDefault();

        const newInnovator = {
            name,
            email,
            phone,
            company,
            title,
            summary,
            problem,
            solution,
            audience,
            usp,
            curentstage,
            awards
        }

        axios.post("http://localhost:8070/innovator/add", newInnovator).then(()=>{
            alert("Innovator details added")
        }).catch((err)=>{
            alert(err)
        })
    }

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Name" onChange={(e)=>{
                            setName(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Enter Email" onChange={(e)=>{
                            setEmail(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" id="phone" placeholder="Enter Phone" onChange={(e)=>{
                            setPhone(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="company">Company</label>
                        <input type="text" class="form-control" id="company" placeholder="Enter company" onChange={(e)=>{
                            setCompany(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="title">title</label>
                        <input type="text" class="form-control" id="title" placeholder="Enter title" onChange={(e)=>{
                            setTitle(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="summary">summary</label>
                        <input type="text" class="form-control" id="summary" placeholder="Enter summary" onChange={(e)=>{
                            setSummary(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="problem">problem</label>
                        <input type="text" class="form-control" id="problem" placeholder="Enter problem" onChange={(e)=>{
                            setProblem(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="solution">solution</label>
                        <input type="text" class="form-control" id="solution" placeholder="Enter solution" onChange={(e)=>{
                            setSolution(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="audience">audience</label>
                        <input type="text" class="form-control" id="audience" placeholder="Enter audience" onChange={(e)=>{
                            setAudience(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="usp">usp</label>
                        <input type="text" class="form-control" id="usp" placeholder="Enter usp" onChange={(e)=>{
                            setUsp(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="curentstage">curentstage</label>
                        <input type="text" class="form-control" id="curentstage" placeholder="Enter curentstage" onChange={(e)=>{
                            setCurentstage(e.target.value);
                        }}></input>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="awards">awards</label>
                        <input type="text" class="form-control" id="awards" placeholder="Enter awards" onChange={(e)=>{
                            setAwards(e.target.value);
                        }}></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}