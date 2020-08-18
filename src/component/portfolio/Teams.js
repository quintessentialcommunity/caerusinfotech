import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TeamCard from "../../layout/TeamCard";
import TeamLead from "../../layout/TeamLead";
import Vartika from "../../images/Vartika.jpg";
import Ayush from "../../images/Ayush.jpg";
import Nadeem from "../../images/Nadeem.png"
import front from "../../images/front_image.jpg";
import umag from "../../images/Umang sharma.jpeg"
import vijay from "../../images/Vijay Narain Meena.jpg"
//import pranav from "../../images/Umang sharma.jpeg" reamaning
import ravi from "../../images/Ravi singh.jpg";

function Teams() {
  return (
    <div>
      <Header />

      <div className="container" style={{ paddingTop: "5rem" }}>
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
          <h4 style={{fontSize:"2.5rem"}}>Team Leads</h4>
        </div>
        <div className="row  mb-5">
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Umang Sharma"
              About="Android  Development"
              dp={umag}
              facebook="http://www.facebook.com/"
              twitter="https://twitter.com/WahiLadka?s=09"
              linkedin="https://www.linkedin.com/in/0729/"
            />
          </div>

          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Vartika Dadheech"
              About="Content Lead"
              dp={Vartika}
              linkedin="https://www.linkedin.com/in/vartika-dadheech-505514191/"
              facebook="https://github.com/dadheech-vartika"
              twitter="https://mobile.twitter.com/DadheechVartika"
            />
          </div>

          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Vijay Narayan Meena"
              About="Design Lead"
              dp={vijay}
              facebook="https://www.facebook.com/profile.php?id=100009121692340"
              twitter="https://twitter.com/VijayMeena2003?s=09"
              linkedin="https://www.linkedin.com/in/vijay-narain-meena-b80049184"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Pranav Verma"
              About="Machine Learning"
              dp=""
              facebook=""
              twitter=""
              linkedin=""            
              />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Ravi singh"
              About="Social Media Manager"
              dp={ravi}
              facebook="https://www.facebook.com/ravisingh1057"
              twitter="https://twitter.com/RaviSin67628215?s=09"
              linkedin="https://www.linkedin.com/in/ravi-singh-802673115"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Ayush Srivastava"
              About="Web Development"
              dp={Ayush}
              linkedin="https://www.linkedin.com/in/ayush-srivastava-0b7156191/"
              facebook="https://github.com/ayush015"
              twitter="https://twitter.com/smackYeeeh"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            width:"100%",
            borderRadius:"10px",
            textAlign:"center"
          }}
        >
          <h4 style={{fontSize:"2.5rem"}}>Top Contributers</h4>
        </div>
        <div className="row  mb-5">
          <div className="col-lg-4  col-sm-12 mt-5 ">
            <TeamCard
              Name="Gaurav"
              img={front}
              position="Web developer"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="Garima"
              img={front}
              position="GitHub Team Maintainer"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="Satyam Singh Virat"
              img={front}
              position="Content Writer"
            />
          </div>
        </div>
        <div className="row  mb-5">
          <div className="col-lg-4  col-sm-12 mt-5 ">
            <TeamCard
              Name="Rhythm Varshney"
              img={front}
              position="Graphic Designing"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="Nadeem Khan"
              img={Nadeem}
              position="React Developer"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="GurLeen Kaur"
              img={front}
              position="BlockChain Developer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
