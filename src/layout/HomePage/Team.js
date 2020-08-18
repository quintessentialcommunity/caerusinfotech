import React from "react";
import Govind from "../../images/founder.jpg";
import Devansh from "../../images/Devansh.jpg";
import Nikhil from "../../images/Nikhil.jpg";
import Anu from "../../images/Anushak.jpg";

function Team(props) {
  return (
    <section className="our-webcoderskull padding-lg">
      <div className="container">
        <div className="row heading heading-icon">
          <h2>Our Team</h2>
        </div>
        <ul className="row">
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block block">
              <figure>
                <img src={Govind} className="img-responsive" alt="Govind Varshney"/>
              </figure>
              <h3 style={{fontWeight:700}}>Govind Varshney</h3 >
              <p style={{color:"black"}}>Founder</p>
              <ul class="follow-us clearfix">
                <li className="pr-3">
                  <a href="https://www.facebook.com/govindvarshnyy">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://twitter.com/govindvarshny">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://www.linkedin.com/in/govindvarshny/">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block block">
              <figure>
                <img src={Anu} className="img-responsive" alt="Anu"/>
              </figure>
              <h3 style={{fontWeight:700}}>Anushka Porwal</h3 >
              <p style={{color:"black"}}>Community Lead </p>
              <ul class="follow-us clearfix">
                <li className="pr-3">
                  <a href="https://www.facebook.com/anushkaporwl">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://www.linkedin.com/in/anushkaporwal">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://twitter.com/porwal_anushka?s=09">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block block">
              <figure>
                <img src={Devansh} className="img-responsive" alt="Devnash Mathur"/>
              </figure>
              <h3 style={{fontWeight:700}}>Devansh Mathur</h3 >
              <p style={{color:"black"}}>Operation Lead</p>
              <ul class="follow-us clearfix">
                <li className="pr-3">
                  <a href="https://www.facebook.com/devmathur164">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://twitter.com/DevanshMathur21">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://www.linkedin.com/in/devansh-mathur-9784636705/">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block block">
              <figure>
                <img src={Nikhil} className="img-responsive" alt="Nikhil"/>
              </figure>
              <h3 style={{fontWeight:700}}>Nikhil Bansal</h3 >
              <p style={{color:"black"}}>Tech Lead</p>
              <ul className="follow-us clearfix">
                <li className="pr-3">
                  <a href="https://m.facebook.com/profile.php?id=100009490008073&ref=content_filte">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://mobile.twitter.com/nikhilanil2646?lang=en">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="pr-3">
                  <a href="https://www.linkedin.com/mwlite/in/nikhil-bansal-1a0b7414a">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Team;
