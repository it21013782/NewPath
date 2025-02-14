import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Welcome from "../Images/loginbanner.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const checkLogin = async () => {
    await fetch("http://localhost:8070/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Sucessfull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-account");
          return res.json();
        }
      })
      .then(async (data) => {
        console.log(data.refreshToken);
        localStorage.setItem("rfkey", data.refreshToken);
        localStorage.setItem("isLogged", true);
        await setUsername();
        window.location.reload(false);
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const setUsername = async () => {
    await fetch("http://localhost:8080/api/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("username", data.username);
        console.log(data.username);
      });
  };

  return (
    <section class="vh-100">
      <div class="container-fluid h-custom h-100">
        <div class="" style={{display: "flex", justifyContent: "space-between"}}>
          <div class="" style={{height: "1fr", width: "40%"}}>
            <img src={Welcome} class="img-fluid" alt="Sample" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{margin: "10rem 10rem"}}>
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label class="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label class="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">
                  Forgot password?
                </a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={() => {
                    checkLogin();
                  }}
                >
                  Login
                </button>

                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;