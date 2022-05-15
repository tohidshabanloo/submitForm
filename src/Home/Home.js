import React from "react";
import "./Home.css";

const Home = () => {
  const data = {
    provinces: [
      { id: 1, name: "P1" },
      { id: 2, name: "P2" },
      { id: 3, name: "P3" },
      { id: 4, name: "P4" },
    ],
    cities: [
      { id: 1, name: "C1", provinceId: 1 },
      { id: 2, name: "C2", provinceId: 1 },
      { id: 3, name: "C3", provinceId: 1 },
      { id: 4, name: "C4", provinceId: 2 },
      { id: 5, name: "C5", provinceId: 2 },
      { id: 6, name: "C6", provinceId: 3 },
      { id: 7, name: "C7", provinceId: 4 },
    ],
  };

  return (
    <div className="container">
      <div className="location">
        <div className="controled1">
          <select></select>
          <h4>استان</h4>
        </div>
        <div className="controled2">
          <select></select>
          <h4>شهر </h4>
        </div>
        <div className="uncontroled">
          <input type="number" />
          <h4>موبایل</h4>
        </div>
      </div>
      <button className="submit">ثبت</button>
    </div>
  );
};

export default Home;
