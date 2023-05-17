import "./App.css"
import React, {useEffect, useState} from "react"
import axios from "axios"
import Header from "./Components/Header"
import AddBusiness from "./Components/AllForms/AddBusiness"
import AddInnovator from "./Components/AllForms/AddInnovator"
import HomePage from "./pages/home"
import Register from "./pages/Register"
import Login from "./pages/login"
import Business from "./pages/dashboards/business"
import VolunteerDB from "./pages/dashboards/volunteer"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  const [status, setStatus] = useState(false)
  const token = localStorage.getItem("rfkey")
  const [isVolunteer, setIsVolunteer] = useState(false)

  const checkLogin = async () => {
    const user = {
      refreshToken: token,
    }

    const {data: response} = await axios.post("http://localhost:8080/api/refreshToken", user)
    console.log(response.error)
    if (response.error === false) {
      setStatus(true)
      console.log("setted true")
    } else {
      setStatus(false)
      console.log("setted false")
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  const fetchRole = async () => {
    if (status == true) {
      try {
        const {data: response} = await axios.get(`http://localhost:8080/api/users/getId/${localStorage.getItem("username")}`)

        if (setIsVolunteer(response.isVolunteer)) console.log(response)
      } catch (error) {
        console.error(error.message)
      }
    }
  }

  useEffect(() => {
    fetchRole()
  }, [])

  const logOut = async () => {
    await fetch("http://localhost:8080/api/refreshToken", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: localStorage.getItem("rfkey"),
      }),
    }).then((res) => {
      if (res.ok) {
        localStorage.setItem("rfkey", "")
        console.log("logged out successfully")
        window.location.reload(false)
        setStatus(false)
        console.log(status)
      } else {
        console.log("Cannot logout")
      }
    })
    localStorage.removeItem("isLogged")
  }

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/businessDashboard" exact Component={Business} />
          <Route path="/innovatorDashboard" exact Component={AddInnovator} />
          <Route path="/volunteerDashboard" exact Component={VolunteerDB} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" exact Component={HomePage} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
