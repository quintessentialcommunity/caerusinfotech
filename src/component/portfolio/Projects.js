import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Modals from "../../layout/HomePage/modals";

function Projects() {
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            marginTop: "7rem",
            width: "100%",
            borderRadius: "10px",
            textAlign:"center"
          }}
        >
          <h4 style={{fontSize:"2.5rem"}}>Projects</h4>
        </div>
        <div className="row mt-5 mb-5 ">
          <div className="col-lg-4  col-sm-12 ">
            <div className="card" style={{ margin: "1rem" }}>
              <img
                src={process.env.PUBLIC_URL + "/Images/project1.jpeg"}
                className="card-img-top"
                alt="Helmet detection"
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Helmet detection</h5>

                <Modals
                  title="Helmet detection"
                  content="A customized project which detects traffic rules violation by
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
                alt="Tracking Hospital beds"
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Tracking hospital beds</h5>
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
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Educational App</h5>
                <Modals
                  title="Educational App"
                  content="This app is a free suite of productivity tools that includes email, documents, and storage. This help teachers save time, keep classes organized, take virtual classes and improve communication with students."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 ">
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
