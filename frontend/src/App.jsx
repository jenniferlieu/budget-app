import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dataArray, setDataArray] = useState([]); // Store the array of objects

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json", // MUST SEND WITH THIS
      },
    };

    fetch("http://localhost:3001/api/account", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        if (Array.isArray(data)) {
          setDataArray(data); // Store the entire array in state
        } else {
          console.error("Expected an array but got:", data);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <h3>API Data:</h3>
        {dataArray.length > 0 ? (
          <ul>
            {dataArray.map((item, index) => (
              <li key={index}>
                {JSON.stringify(item)} {/* Display each object as a string */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
