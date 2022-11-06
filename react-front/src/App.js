import React, { useState, useEffect } from "react";
import logo from "./avatar.png";
import "./App.css";
import { SignIn, SignUP } from "./Login";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

function MainPage() {
  const [login, setLogin] = useState(null);
  const [user, setUser] = useState(null);

  function setLoginInfo(e) {
    console.log(e);
    setLogin(true);
    setUser(e);
  }

  if (!login)
    return (
      <div className="loginpage" style={{ display: "flex" }}>
        <SignIn setLogin={setLoginInfo} />
        <SignUP setLogin={setLoginInfo} />
      </div>
    );
  else return <SQLRepl user={user}/>;
}

function SQLRepl({user}) {
  const [sql, setSql] = useState("");
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  function onChange(text) {
    setSql(text);
  }

  function exec() {
    try {
      const data = {
        user: user,
        sql: sql
    };
    console.log(data);
      fetch("http://localhost:3001/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" , "user": JSON.stringify(user)},
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          setResults(res);
        })
        .catch((e) => console.log(e));

      setError(null);
    } catch (err) {
      // exec throws an error when the SQL statement is invalid
      setError(err);
      setResults([]);
    }
  }

  return (
    <div>
      <h1>SQL-Trainer TMS-II</h1>

      <textarea
        rows="25"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter some SQL”"
      ></textarea>

      <button onClick={(e) => exec()}>Execute</button>

      <pre className="error">{(error || "").toString()}</pre>

      <pre>
        {
          // results contains one object per select statement in the query
          
          results.map((table , i) => (

            
            <>
            <h1>{table.name}</h1>
            <ResultsTable key={"inde_"+i} td={table} />
            </>
            
          ))
          
        }
      </pre>
    </div>
  );
}

function ResultsTable({ td }) {
  console.log(td)
  return (
    <table>
      <thead>
      
      </thead>

      <tbody>
        {
          // still need to find a way for the HTTP tables of the queries ---- values is an array of arrays representing the results of the query
          
        }
      </tbody>
    </table>
  );
}

export default App;
