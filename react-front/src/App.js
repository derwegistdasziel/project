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

  function setLoginInfo(e) {
    console.log(e);
    setLogin(true);
  }

  if (!login)
    return (
      <div className="loginpage" style={{ display: "flex" }}>
        <SignIn setLogin={setLoginInfo} />
        <SignUP setLogin={setLoginInfo} />
      </div>
    );
  else return <SQLRepl />;
}

function SQLRepl() {
  const [sql, setSql] = useState("");
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  function onChange(text) {
    setSql(text);
  }

  function exec() {
    try {
      fetch("http://localhost:3001/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sql: sql,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
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
      <h1>React SQL interpreter</h1>

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
          results.map(({ columns, values }, i) => (
            <ResultsTable key={i} columns={columns} values={values} />
          ))
        }
      </pre>
    </div>
  );
}

function ResultsTable({ columns, values }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((columnName, i) => (
            <td key={i}>{columnName}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {
          // values is an array of arrays representing the results of the query
          values.map((row, i) => (
            <tr key={i}>
              {row.map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default App;
