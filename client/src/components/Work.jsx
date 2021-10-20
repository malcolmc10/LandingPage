import React, { Component } from 'react';
import './Work.css';
import { AiFillGithub } from "react-icons/ai"
import {CgBrowser} from "react-icons/cg"
// import Box from "./components/Box.png"
// import Clima from "./components/Clima.png"
// import Covid from "./components/Covid.png"
// import Harry from "./components/Harry.png"

class Work extends Component {
  render() {
    return (
      <div className="work">
        {/* <span class="dot"></span> */}
       
        <h1 className="projectheading">Projects</h1>

        <div className="card">
          <div className="image-data">
            <div className="background-image"></div>

            <div className="project-details">
              
              
              {/* class="author" below */}
              <a href="https://github.com/malcolmc10/Pandemic" class="github">
                <AiFillGithub class="icon1" /></a>
              
              <a href="https://covid-country-e9bff.web.app/" class="website">
              <CgBrowser class="icon2" /></a>
            
            
            </div>
          
          
          </div>
      
        
        </div>
        


      </div>
    );
  }
}

export default Work;
