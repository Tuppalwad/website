import React, { useEffect } from "react";
import img4 from "../Asset/444.webp";
import img6 from "../Asset/zigzag3.png";
const Tablecomponent = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    try {
      fetch("http://3.7.96.152:5000/seatinfo ")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container " style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-6">
          <table className="table table-bordered table-rounded table-light-blue">
            <thead>
              <tr className="text-center">
                <th>Price</th>
                <th>Seat No</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr className="text-center" key={index}>
                  <td>{item.price}</td>
                  <td>{item.seat_no}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6 d-flex">
          <div
            className="d-flex flex-column shadow p-3 mb-5 bg-white rounded "
            style={{
              width: "210px",
              height: "200px",
              marginRight: "-20px",
              zIndex: "1",
              paddingLeft: "20px",
              marginTop: "200px",
            }}
          >
            <div className="d-flex ">
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "rgba(255, 192, 203, 0.932)",
                  borderRadius: "50%",
                  marginTop: "14px",
                }}
              ></div>
              <div
                className="ms-2 setavailability"
                style={{ marginLeft: "3px" }}
              >
                Seat
                <br></br> Availability
              </div>
            </div>
            <div className="my-2" style={{ width: "300px" }}>
              <span className="report">REPORT: 2023-05-18</span>
            </div>
            <div className="d-flex mt-2">
              <div
                className=""
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(235, 192, 103, 0.932)",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></div>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(114, 102, 103, 0.932)",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></div>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(255, 192, 103, 0.932)",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></div>
              <div>
                <button className="btn submitbtn">Submit</button>
              </div>
            </div>
          </div>
          <img src={img4} className="img44" alt="Image" />
          <img src={img6} className="img66" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Tablecomponent;
