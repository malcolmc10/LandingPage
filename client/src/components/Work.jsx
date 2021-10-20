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

        <div className="work-section">

        <div className="card">
          <div className="image-data">
            <div className="background-image"></div>

            <div className="project-details">
              
              <p class="left-title">What Did I Use</p>
              
             
            
            
            </div>
          
          
          </div>

          <div className="post-data"></div>
          <h1 class="project-title">COVID Country</h1>
          <h2 class="project-subtitle">A Project With A Purpose</h2>
          <p className="project-description">Using the disease.sh API, Leaflet, and Material UI I created an interactive tool that allows the user to track the numbers of cases, recoveries, and deaths in countries all over the world using a line graph, bubbles, and charts.</p>

          <div className="cta">
              <a href="https://github.com/malcolmc10/Pandemic" rel="noreferrer" target="_blank" class="github">
                <AiFillGithub class="icon1" /></a>
              
              <a href="https://covid-country-e9bff.web.app/" rel="noreferrer" target="_blank" class="website">
              <CgBrowser class="icon2" /></a>

          </div>


        </div>
        

        </div>
      </div>
    );
  }
}

export default Work;















 {/* class="author" below */}
              {/* <a href="https://github.com/malcolmc10/Pandemic" rel="noreferrer" target="_blank" class="github">
                <AiFillGithub class="icon1" /></a>
              
              <a href="https://covid-country-e9bff.web.app/" rel="noreferrer" target="_blank" class="website">
              <CgBrowser class="icon2" /></a> */}