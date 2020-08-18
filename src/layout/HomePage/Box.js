

import React from "react";
import Image1 from "../../images/box1_img.png";
import Image2 from "../../images/box1_img.png";
import Image3 from "../../images/box1_img.png";


function Services(props) {
  return (
    <React.Fragment>
      <div className="container" style={{maxWidth:"1500px"}}>
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src={Image1}
                  />
                  <h3>Innovate</h3>
                </div>
              </div>

              <div className="face face2">
                <div className="content">
                  <p>
                    We have a wide range of innovative plans to fit your vision
                    and goals. Whether you have an already existing idea or need
                    help thinking creatively, we ensure to fulfill all.
                  </p>
                  <a className="btn btn-outline-info" href="/">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src={Image2}
                  />
                  <h3>Explore</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Not sure which domain suits you best? Confused among
                    multiple options and eager to explore all? With us you can
                    explore, learn & gain experience in multiple domains.
                  </p>
                  <a className="btn btn-outline-info" href="/">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src={Image2}
                  />
                  <h3>Collaborate</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Join hundreds of students in our supportive online
                    community. They’re always available to lend you support and
                    nudge you in the right direction.
                  </p>
                  <a className="btn btn-outline-info" href="/">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src={Image3}
                  />
                  <h3>Support</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Stuck at some point and feeling yourself needing assistance
                    of an expert? With us, you can have experts reach to you in
                    no time and get all your queries solved.
                  </p>
                  <a className="btn btn-outline-info" href="/">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Services;
