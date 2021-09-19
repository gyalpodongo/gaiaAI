import React from 'react';
import MapChart from "./features/map/MapChart"
import Navbar from "./features/bar/Navbar"
import About from "./features/about/About"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import MapContainer from './features/map/GoogleMap';
function App() {
  return (
<<<<<<< HEAD
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
        <MapContainer></MapContainer>
      </body>
=======
    <React.Fragment>
      
      
        <Router>
          <Navbar />
          <div className="App">
          <Switch>
              <Route path="/" exact>
                  <About />
              </Route>
              <Route path="/map" exact>
                  <MapChart />
              </Route>
          </Switch>
          </div>
        </Router>
>>>>>>> 13ed2845c5f6804bf62b99792943bfe757d24396
      <footer>

      </footer>
    
    </React.Fragment>
  );
}

export default App;
