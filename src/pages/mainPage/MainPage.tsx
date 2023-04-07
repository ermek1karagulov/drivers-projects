import React from "react";
import CardDriver from "../../antDesign/card/CardDriver";
import Navbar from "../../antDesign/navbar/Navbar";

const MainPage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardDriver />
      </div>{" "}
    </div>
  );
};

export default MainPage;
