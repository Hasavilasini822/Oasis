import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <br />
      <h1 className="main-card1">My Projects</h1>
      <section className="section">
        <div className="row">
        <div className="col-md-3">
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-4 card-img"></div>
              <div className="title">
                <h3>Weather Monitoring using IoT</h3>
                <h6>10/2022-11/2022</h6>
                <p>
                  Created a Weather MOnitoring System using IoT. That gives
                  weather details
                </p>
                <button className="card-btn">More Details</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-3 card-img"></div>
              <div className="title">
                <h3>Telegram Chat Bot Using Node Js</h3>
                <h6>09/2022-11/2022</h6>
                <p>Created a ChatBot thta gives Student Deatils</p>
                <button className="card-btn">More Details</button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="row">
        <div className="col-md-3">
            <div className="card">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
