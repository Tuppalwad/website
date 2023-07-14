import React from "react";
import Navbar from "./Navbar";
import "../index.css";
import img from "../Asset/home1.jpeg";
import imgply from "../Asset/plyicon.png";
import img1 from "../Asset/analytics.png";
import img2 from "../Asset/11.png";
import img3 from "../Asset/background.png";
import img4 from "../Asset/zigzag1.png";
import BookinHistory from "./BookinHistory";
import Tablecomponent from "./Tablecomponent";
import BarGraph from "./Bargraph";
function Home() {
  return (
    <div>
      <div className="bg-light">
        <Navbar></Navbar>

        <div className="d-flex" style={{ width: "86%", margin: "0px auto" }}>
          <div className="d-flex flex-column leftsideheding ">
            <h1 style={{ fontWeight: "600", color: "#273464" }}>
              We Build Business convert<br></br> ideas into softwares{" "}
            </h1>

            <p style={{ color: "#3c4b64" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. <br></br>Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div>
              <button
                className="btn me-3 demobtn "
                style={{
                  marginRight: "40px",
                  border: "#3c4b64",
                  cursor: "pointer",
                }}
              >
                <img
                  src={imgply}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginTop: "-3px",
                  }}
                  alt=""
                />
                <span className="ms-3"> Demo </span>
              </button>
              <button
                className="btn ms-3 buttons "
                style={{ cursor: "pointer" }}
              >
                {" "}
                Sing up{" "}
              </button>
              <img src={img4} className="img4" alt="" />
            </div>
          </div>
          <div className="rightsideimg   ">
            <img src={img1} className="img1" alt="" />
            <img src={img} className="homeimg" alt="img" />
            <img src={img2} className="img2" alt="" />
          </div>
        </div>
        <div className=" container ">
          <img src={img3} className="img3" alt="" />
        </div>
      </div>
      <div>
        <BookinHistory></BookinHistory>
        <Tablecomponent></Tablecomponent>
      </div>
    </div>
  );
}

export default Home;
