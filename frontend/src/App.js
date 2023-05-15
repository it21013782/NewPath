import "./App.css"
import React, {useEffect, useState} from "react"
import axios from "axios"
import Header from "./Components/Header"
import AddBusiness from "./Components/AllForms/AddBusiness"
import AddInnovator from "./Components/AllForms/AddInnovator"
import AddVolunteer from "./Components/AllForms/AddVolunteer"
import HomePage from "./pages/home"
import Register from "./pages/Register"
import Login from "./pages/login"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  const [status, setStatus] = useState(false)
  const token = localStorage.getItem("rfkey")
  const [isVolunteer, setIsVolunteer] = useState(false)
  const [isBusinessman, setIsBusinessman] = useState(false)
  const [isInnovator, setIsInnovator] = useState(false)
  const [isInvester, setIsInvester] = useState(false)

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
        if (setIsBusinessman(response.isBusinessman)) console.log(response)
        if (setIsInnovator(response.isInnovator)) console.log(response)
        if (setIsInvester(response.isInvester)) console.log(response)
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
          <Route path="/addbusiness" exact Component={AddBusiness} />
          <Route path="/addinnovator" exact Component={AddInnovator} />
          <Route path="/addvolunteer" exact Component={AddVolunteer} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" exact Component={HomePage} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
