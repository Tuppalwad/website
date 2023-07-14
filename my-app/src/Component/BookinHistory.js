import React from "react";
import img1 from "../Asset/zigzag2.png";
import img2 from "../Asset/zigzag4.png";
import img3 from "../Asset/33.jpg";
import BarGraph from "./Bargraph";
function BookinHistory() {
  return (
    <div className=" container-fluid " style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-lg-4">
          <img src={img3} className="img13" alt="" />
          <img src={img2} className="img12" alt="" />
          <img src={img1} className="img11" alt="" />
        </div>
        <div className="col-lg-8">
          <h1
            className="text-center mt-3"
            style={{
              marginBottom: "-30px",
              fontWeight: "600",
              color: "#273464",
              fontFamily: "Laila ,serif",
            }}
          >
            Booking History
          </h1>
          <BarGraph></BarGraph>
          <button className="btn ms-3 buttons " style={{ marginLeft: "200px" }}>
            {" "}
            Get Started{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookinHistory;
