import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const Data = {
    provinces: [
      { id: 1, name: "تهران" },
      { id: 2, name: "مشهد" },
      { id: 3, name: "گیلان" },
      { id: 4, name: "مازندران" },
    ],
    cities: [
      { id: 1, city: "دماوند", privetKey: "1" },
      { id: 2, city: "شهریار", privetKey: "1" },
      { id: 3, city: "اسلامشهر", privetKey: "1" },
      { id: 4, city: "کرج", privetKey: "1" },
      { id: 5, city: "نیشابور", privetKey: "2" },
      { id: 6, city: "سبزوار", privetKey: "2" },
      { id: 7, city: "کاشمر", privetKey: "2" },
      { id: 8, city: "قوچان", privetKey: "2" },
      { id: 9, city: "آستانه", privetKey: "3" },
      { id: 10, city: "رشت", privetKey: "3" },
      { id: 11, city: "لاهیحان", privetKey: "3" },
      { id: 12, city: "لنگرود", privetKey: "3" },
      { id: 13, city: "کوچصفهان", privetKey: "3" },
      { id: 14, city: "سده", privetKey: "4" },
      { id: 15, city: "مرکزی", privetKey: "4" },
      { id: 16, city: "اقلید", privetKey: "4" },
      { id: 17, city: "اوز", privetKey: "4" },
      { id: 18, city: "بونات", privetKey: "4" },
    ],
  };
  const cityArray = (item) => {
    return <option value={item.id}>{item?.name}</option>;
  };
  const filterHandler = () => {
    let result = Data.cities.filter((id) => id.privetKey === data);
    result.length > 0 && setCity(result);
  };

  useEffect(() => {
    data && filterHandler();
  }, [data]);

  return (
    <div className="container">
      <div className="location">
        <div className="controled1">
          <select
            className="input ostan"
            onChange={(e) => setData(e.target.value)}
          >
            {Data.provinces.map((items) => cityArray(items))}
          </select>
          <h4>استان</h4>
        </div>
        <div className="controled2">
          <select>
            {city.length > 0 &&
              city.map((cityName) => <option>{cityName.city}</option>)}
          </select>
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
