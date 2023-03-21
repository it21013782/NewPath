import React, {useState, useEffect} from "react";
import axios from "axios";

export default function AllBusinesses(){

    const [businesses, setBusinesses] = useState([]);

    useEffect(()=>{
        function getBusinesses(){
            axios.get("http://localhost:8070/business/").then((res)=>{
                setBusinesses(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getBusinesses();
    },[])

    return(
        <div>
            <h1>All Businesses</h1>
        </div>
    )
}
