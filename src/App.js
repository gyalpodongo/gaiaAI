import React from 'react';
import {Navbar,Nav, Container, Button, NavDropdown} from "react-bootstrap"
import MapChart from "./features/map/MapChart"
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Gaia AI
        </h1>
      </header>
      <body>
        <h4>Welcome to Gaia AI</h4>
        <p>Select the area of the world where you want to grow crops</p>
        <MapChart></MapChart>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
