
import React from "react";

function Box(props) {
  return (
    <div className="">
      
      <div
        className="alert alert-secondary"
        role="alert"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          width: "100%",
          borderRadius: "10px",
          textAlign: "center"
        }}
      >
        {/* <Link className="btn btn-outline-dark" to="/Projects"> */}
        <h3 style={{fontSize:"2.5rem"}}>Activities</h3>
        {/* </Link> */}
      </div>
      <div className="row small_box">
        <div className="col-lg-3">
          <div className="box">
            <h5>Open source projects</h5>
            <p>
              From sharpest minds across the country working towards a project
              join hands with us, contribute, grow your skillset and most
              importantly get recognition.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="box">
            <h5>Webinars</h5>
            <p>
              Extend your knowledge base with informative webinars from well
              known developers & tech leads for free and learn new skills.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="box">
            <h5>Hackathon</h5>
            <p>
              Hackathon is a journey that we embark encouraging young minds to
              think differently and innovatively and collaborate with fellow
              Teammates of similar or different domains to solve real world
              challenges.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="box">
            <h5>Fun-with-Code</h5>
            <p>
              Love coding? Come participate in the coding competitions organised
              regularly in Quintessential community with leading programming
              languages and sharpen your skillset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
