import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { DetailsData,ConfigurationData,DataIntegrationData } from "./SidebarData";
import "./Navbar.css";
import _ from "lodash"

const Sidebar = (props) => {
    return (
        <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={props.handleSidebar}>
            <li className='navbar-toggle'>
              <a href='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            <p>Hello, <b>user</b> </p>
            
            <li className='nav-text'>
              <a href="/" >
                <FaIcons.FaHome />
                <span className="barspan">Home</span>
              </a>
            </li>
            <li className='nav-title'>
              <p>ACCOUNT</p>
              
            </li>
            <hr></hr>
            {DetailsData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span className="barspan">{item.title}</span>
                  </a>
                </li>
              );
            })}
            <li className='nav-title'>
              <p>DATA INTEGRATION</p>
            </li>
            <hr></hr>
            {DataIntegrationData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span className="barspan">{item.title}</span>
                  </a>
                </li>
              );
            })}
            <li className='nav-title'>
              <p>CONFIGURATIONS</p>
            </li>
            <hr></hr>
            {ConfigurationData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span className="barspan">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
    )
}

export default Sidebar