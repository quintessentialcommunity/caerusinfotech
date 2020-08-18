import React from "react";
import Modals from "./modals";


function Project() {
  return (
    <div>
      <div
        className="alert alert-secondary"
        role="alert"
        style={{
          marginTop: "50px",
          width: "100%",
          borderRadius: "10px",
          textAlign:"center"
        }}
      >
        <h3 style={{fontSize:"2.5rem"}}>Our Work</h3>
      </div>
      
      <div className="row mt-5 mb-5 ">
        <div className="col-lg-4  col-sm-12 ">
          <div className="card " style={{ margin: "1rem" }}>
            <img
              src={process.env.PUBLIC_URL + "/Images/project1.jpeg"}
              className="card-img-top"
              alt="helmet detection"
              height="300px"
              width="300px"
            />
            <div className="card-body">
              <h4 className="card-title">Helmet detection</h4>
              <p className="card-text" />

              <Modals
                title="Helmet detection"
                content=" A customized project which detects traffic rules violation by
                tracking & checking that a helmet is worn by every two-wheeler
                rider."
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4  col-sm-12 ">
          <div className="card " style={{ margin: "1rem" }}>
            <img
              src={process.env.PUBLIC_URL + "/Images/project2.png"}
              className="card-img-top"
              alt="..."
              height="300px"
              width="300px"
            />
            <div className="card-body">
              <h4 className="card-title">Tracking hospital beds</h4>
              <p className="card-text" />

              <Modals
                title="Tracking hospital beds"
                content="  A customized android & web application using Maps to track the
                nearby hospitals which & provide information about the
                availability of beds and facilities in that particular hospital."
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4  col-sm-12 ">
          <div className="card " style={{ margin: "1rem" }}>
            <img
              src={process.env.PUBLIC_URL + "/Images/project3.jpg"}
              className="card-img-top"
              alt="Education Application"
              height="300px"
              width="300px"
            />
            <div className="card-body">
              <h4 className="card-title">Educational App</h4>
              <p className="card-text">
                {/* (with short description detailed will be when user clicks over
                Read More ) */}
              </p>

              <Modals
                title="Educational App"
                content="This app is a free suite of productivity tools that includes email, documents, and storage. This help teachers save time, keep classes organized, take virtual classes and improve communication with students."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
