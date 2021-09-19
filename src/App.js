import React from 'react';
import MapChart from "./features/map/MapChart"
import Navbar from "./features/bar/Navbar"
import About from "./features/about/About"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import MapContainer from './features/map/GoogleMap';
function App() {
  return (
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
                  <MapContainer></MapContainer>
              </Route>
          </Switch>
          </div>
        </Router>
        
      <footer>

      </footer>
    
    </React.Fragment>
  );
}

export default App;
