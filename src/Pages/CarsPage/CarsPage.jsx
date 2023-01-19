import React, { useEffect, useState } from "react";
import cars from "../../Styles/CarsPage.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { GiGearStickPattern } from "react-icons/gi";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getCarsData } from "../../Redux/CarsData/carsData.action";

const CarsPage = () => {
  const dispatch = useDispatch();
  const [CarsData, setCarsData] = useState([]);
  const { data } = useSelector((store) => store.CarsReducer);
  /* So basically here i'm getting data form store and setting into setCarsAPIData(data)
    and passing CarsAPIData when it change useEffect re-rendor and it work until data length...
    */


  const handleReset = () => {
    setCarsData(data);
  };

  const handleLowtoHigh = () => {
    const sortfunc = data.sort((a, b) => {
      return a.price - b.price;
    });
    setCarsData(sortfunc);
    console.log(" low to high", sortfunc);
  };

  const handleHightoLow = () => {
    const sortfuncHigh = data.sort((a, b) => {
      return b.price - a.price;
    });
    setCarsData(sortfuncHigh);
    // console.log(" sort high to low", sortfuncHigh);
  };

  const handleBestRating = () => {
    const BestRating = data.sort((a, b) => {
      return b.rating - a.rating;
    });
    setCarsData(BestRating);
    // console.log(" sort high to low", BestRating);
  };

  // const handleCarTypes = (e) => {
  //   const CarTypesvalue = data.filter((el, i) => {
  //     if (el.type === e.target.value) {
  //       return data;
  //     }
  //   });
  //   setCarsData(CarTypesvalue);
  //   console.log("Filter data", CarTypesvalue);
  // };

  const handleCarTypesSUV = () => {
    const CarTypesvalue = data.filter((el, i) => {
      if (el.type === "SUV") {
        return data;
      }
    });
    setCarsData(CarTypesvalue);
    // console.log("Filter data", CarTypesvalue);
  };
  const handleCarTypesSedan = () => {
    const CarTypesvalue = data.filter((el, i) => {
      if (el.type === "Sedan") {
        return data;
      }
    });
    setCarsData(CarTypesvalue);
    // console.log("Filter data", CarTypesvalue);
  };
  const handleCarTypesHatchBack = () => {
    const CarTypesvalue = data.filter((el, i) => {
      if (el.type === "Hatchback") {
        return data;
      }
    });
    setCarsData(CarTypesvalue);
    // console.log("Filter data", CarTypesvalue);
  };

  // const BestRating = data.filter((ele) => ele.rating == e.target.value);
  // setMet(BestRating);

  const abc = () => {
    // let newdata;
    // const typeFilter = (type) => {
    //   newdata = data.filter((el, i) => {
    //     if (el.type === type) {
    //       return newdata;
    //     }
    //   });
  };

  useEffect(() => {
    dispatch(getCarsData());
  }, [data.length, dispatch, CarsData]);

  useEffect(() => {
    setCarsData(data);
  }, [setCarsData, data.length]);

  /* 

    className={cars. }
  */
  //  else
  return (
    <>
      <div className={cars.IndexMain}>
        <div className={cars.IndexLeft}>
          <div className={cars.SortingTag}>
            <h1 style={{ fontWeight: "600" }}>Sort & Filters</h1>
            <p
              onClick={handleReset}
              style={{ fontWeight: "700", color: "#10A310", cursor: "pointer" }}
            >
              RESET
            </p>
          </div>
          <br />
          <p>Sort By</p>
          <div className={cars.ButtonFirstGrid}>
            <div onClick={handleLowtoHigh}>
              <BiRupee className={cars.icons} />
              <span>Low to High</span>
            </div>
            <div onClick={handleHightoLow}>
              <BiRupee className={cars.icons} />
              <span>High to Low</span>
            </div>
            <div onClick={(e) => handleBestRating(e)}>
              <AiOutlineStar className={cars.icons} />
              <span>Best Rating</span>
            </div>
          </div>

          <br />
          <p>Car type</p>
          <div className={cars.ButtonFirstGrid}>
            <div onClick={(e) => handleCarTypesSUV("SUV")}>
              <FaCarSide className={cars.icons} />
              <span>SUV</span>
            </div>
            <div onClick={() => handleCarTypesSedan("Sedan")}>
              <FaCarSide className={cars.icons} />
              <span>Sedan</span>
            </div>
            <div onClick={() => handleCarTypesHatchBack("Hatchback")}>
              <FaCarSide className={cars.icons} />
              <span>Hatchback</span>
            </div>
          </div>

          <br />
          <p>Seats Type</p>
          <div className={cars.ButtonFirstGrid}>
            <div>
              <GiCarSeat className={cars.icons} />
              <span>2 Seats</span>
            </div>
            <div>
              <GiCarSeat className={cars.icons} />
              <span>4 Seats</span>
            </div>
          </div>

          <br />
          <p>Transmission</p>
          <div className={cars.ButtonFirstGrid}>
            <div>
              <GiGearStickPattern className={cars.icons} />
              <span>Manual</span>
            </div>
            <div>
              <GiGearStickPattern className={cars.icons} />
              <span>Auto</span>
            </div>
          </div>

          <br />
          <p>Fuel</p>
          <div className={cars.ButtonFirstGrid}>
            <div>
              <FaGasPump className={cars.icons} />
              <span>Petrol</span>
            </div>
            <div>
              <FaGasPump className={cars.icons} />
              <span>Diesal</span>
            </div>
          </div>
        </div>

        <div className={cars.Rightsection}>
          {CarsData.map((items, i) => (
            <div key={i} className={cars.mappingContainer}>
              <div>
                <img
                  style={{
                    width: "350px",
                    height: "220px",
                    borderRadius: "5px",
                  }}
                  src={items.image}
                  alt=""
                />
              </div>
              <div style={{ marginTop: "0.6rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1 className={cars.RightsectionH1}>{items.title}</h1>
                  <p style={{ paddingRight: "1.5rem" }}>⭐ {items.rating}</p>
                </div>
                <div className={cars.RightsectionSpans}>
                  <span>{items.fueltype}</span>
                  <span>{items.seats}</span>
                  <span>{items.type}</span>
                </div>
                <h1 className={cars.RightsectionH1}>₹ {items.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarsPage;
