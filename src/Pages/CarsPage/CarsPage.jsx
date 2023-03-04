import React, { useEffect, useState } from "react";
import cars from "../../Styles/CarsPage.module.css";
import { Link, useNavigate } from "react-router-dom";
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
  const [CarType, setCarType] = useState("");
  const [CarSeat, setCarSeat] = useState("");
  const { data } = useSelector((store) => store.CarsReducer);
  

  const handleReset = () => {
    setCarsData(data);
  };

  const handleLowtoHigh = () => {
    const sortfunc = data.sort((a, b) => {
      return a.price - b.price;
    });
    setCarsData(sortfunc);
   
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

  /* Filter Function */
  const handleFilterCarTypes = (e) => {
    const CarTypeData = data.filter((ele) => ele.type === e.target.value);
    setCarsData(CarTypeData);
  
  };

  const handleCarSeats = (e) => {
    const CarSeatData = data.filter((ele) => ele.seats === e.target.value);
    setCarsData(CarSeatData);
 
  };

  const handleCarTransmission = (e) => {
    const CarTransmissionData = data.filter(
      (ele) => ele.transmission === e.target.value
    );
    setCarsData(CarTransmissionData);
   
  };

  const handleCarFuel = (e) => {
    const CarFuel = data.filter((ele) => ele.fueltype === e.target.value);
    setCarsData(CarFuel);
   
  };

  useEffect(() => {
    dispatch(getCarsData());
  }, [data.length, dispatch, CarsData]);

  useEffect(() => {
    setCarsData(data);
  }, [setCarsData, data.length]);

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
            <div className={cars.FirstFilters} onClick={handleLowtoHigh}>
              <BiRupee className={cars.icons} />
              <span>Low to High</span>
            </div>
            <div className={cars.FirstFilters} onClick={handleHightoLow}>
              <BiRupee className={cars.icons} />
              <span>High to Low</span>
            </div>
            <div
              className={cars.FirstFilters}
              onClick={(e) => handleBestRating(e)}
            >
              <AiOutlineStar className={cars.icons} />
              <span>Best Rating</span>
            </div>
          </div>

          <br />
          <p>Car type</p>
          <div className={cars.ButtonFirstGrid}>
            <button value="SUV" onClick={(e) => handleFilterCarTypes(e)}>
              <FaCarSide className={cars.icons} />
              SUV
            </button>
            <button value="Sedan" onClick={(e) => handleFilterCarTypes(e)}>
              <FaCarSide className={cars.icons} />
              Sedan
            </button>
            <button value="Hatchback" onClick={(e) => handleFilterCarTypes(e)}>
              <FaCarSide className={cars.icons} />
              Hatchback
            </button>
          </div>

     
          <br />
          <p>Seats Type</p>
          <div className={cars.ButtonFirstGrid}>
            <button value="2-Seats" onClick={(e) => handleCarSeats(e)}>
              <GiCarSeat className={cars.icons} />2 Seats
            </button>
            <button value="4-Seats" onClick={(e) => handleCarSeats(e)}>
              <GiCarSeat className={cars.icons} />4 Seats
            </button>
          </div>

       
          <br />
          <p>Transmission</p>
          <div className={cars.ButtonFirstGrid}>
            <button value="Manual" onClick={(e) => handleCarTransmission(e)}>
              <GiGearStickPattern className={cars.icons} />
              Manual
            </button>
            <button value="Auto" onClick={(e) => handleCarTransmission(e)}>
              <GiGearStickPattern className={cars.icons} />
              Auto
            </button>
          </div>

      
          <br />
          <p>Fuel</p>
          <div className={cars.ButtonFirstGrid}>
            <button value="Petrol" onClick={(e) => handleCarFuel(e)}>
              <FaGasPump className={cars.icons} />
              Petrol
            </button>
            <button value="Diesel" onClick={(e) => handleCarFuel(e)}>
              <FaGasPump className={cars.icons} />
              Diesal
            </button>
          </div>
        </div>

        <div className={cars.Rightsection}>
          {CarsData.map((items, i) => (
            <Link to={`/cars/${items.id}`}>
              <div key={i} className={cars.mappingContainer}>
                <div>
                  <img
                    className={cars.mappingImg}
                    style={{
                      width: "360px",
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
                    <span>{items.fueltype} </span>
                    <span>{items.seats}</span>
                    <span>{items.type}</span>
                    <span>{items.transmission}</span>
                  </div>
                  <h1 className={cars.RightsectionH1}>₹ {items.price}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarsPage;
