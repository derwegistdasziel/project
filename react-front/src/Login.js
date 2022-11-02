import React, { useState, useEffect } from "react";
import logo from "./avatar.png";
import "./App.css";

export function SignIn({ setLogin }) {
  function submit(e) {
    e.preventDefault();
    console.log(e.target.uname.value);
    console.log(e.target.psw.value);

    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.uname.value,
        password: e.target.psw.value,
      }),
    })
      .then((response) => {
        console.log(response.status);
        alert(response.status);
        return response.json();
      })
      .then(res => setLogin(res))
      .catch((e) => console.log(e));
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)} target="_blank">
        <div className="imgcontainer">
          <img src={logo} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required={true}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required={true}
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" defaultChecked={true} name="remember" />{" "}
            Remember me
          </label>
        </div>
      </form>
    </div>
  );
}

export function SignUP({ setLogin }) {
  function submit(e) {
    e.preventDefault();
    console.log(e);

    if (e.target.psw.value != e.target.psw_repeat.value) {
      alert("password doesnt match");
      return;
    }

    fetch("http://localhost:3001/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.psw.value,
      }),
    })
      .then((response) => {
        console.log(response.body);
        alert(response.status);
        return response.json();
      })
    
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required={true}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required={true}
          />

          <label htmlFor="psw_repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw_repeat"
            required={true}
          />

          <label>
            <input
              type="checkbox"
              defaultChecked={true}
              name="remember"
              style={{ marginBottom: "15px" }}
            />{" "}
            Remember me
          </label>

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
