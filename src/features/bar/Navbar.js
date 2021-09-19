import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import _ from "lodash";
import {Dropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./Navbar.css"

import Button from '@material-ui/core/Button';

const Navbar = () => {
    const [sidebar,setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!sidebar)
    return(
        <>
        <div className="navbar honestBgColor">
            {/*<div>
                <a href="#" className="menu-bars">
                    <FaIcons.FaBars className="bar" size={25} onClick={handleSidebar}/>
                </a>
                
            </div>*/}
            <div className="menu-bars">
            <Button  >
                  <Link to="/map">Map</Link>
              </Button>
              <Button  >
                  <Link to="/map">About Us</Link>
              </Button>
            {/*<Dropdown className={"signout-icon"}>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="icons"
                onClick={showUpload}
              >
                <AiIcons.AiOutlinePlusCircle size={25} fill="white" />
              </Dropdown.Toggle>     
            </Dropdown>
            <Dropdown className={"signout-icon"}>
               {_.capitalize(
                _.get(userInfo, "username")
              )}
              {_.get(userInfo, "userInfo.attributes.Role")}
              <Dropdown.Toggle id="dropdown-basic" className="icons">
                <BsIcons.BsPerson size={25} fill="white" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item> <i>
                {`${
                  _.get(userInfo, "attributes.custom:Role") +
                  " @" +
                  _.get(userInfo, "attributes.custom:Company")
                }`}</i>
                </Dropdown.Item>
                <Dropdown.Item href="/details">
                  <p> Manage account </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <AmplifySignOut className="amplifysignout" />
                </Dropdown.Item>        
              </Dropdown.Menu>

            </Dropdown>*/}
          </div>
        </div>
        </>
    )
}

export default Navbar