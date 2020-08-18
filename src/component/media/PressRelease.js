import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Xenon from  "../../images/Xenon.png"

const Press = () => {
  return (
    <>
      <Header />
      <img src={Xenon} style={{width:"100%",marginTop:"5.5rem"}} alt="..."></img>
      <Footer />
    </>
  );
};

export default Press;
