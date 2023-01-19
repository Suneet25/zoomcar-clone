// import React, { useEffect, useState } from "react";
// import cars from "../Styles/CarsPage.module.css";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";
// import { FaCarSide } from "react-icons/fa";
// import { GiCarSeat } from "react-icons/gi";
// import { FaGasPump } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";
// import { GiGearStickPattern } from "react-icons/gi";
// import { BiRupee } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import { getCarData, getCarDataASC } from "../Redux/CarsData/carsData.action";
// import axios from "axios";

// const CarsPage = () => {
//   const dispatch = useDispatch();
//   const [CarsAPIData, setCarsAPIData] = useState([]);
//   const { loading, error, data } = useSelector((state) => state.cars);
//   const navigate = useNavigate();

//   let descdata;
//   const fetchDesc = async () => {
//     descdata = await axios.get(
//       `http://localhost:8080/cars?_sort=price&_order=desc`
//     );
//   };

//   let maindata;
//   const fetchnormal = async () => {
//     maindata = await axios.get(`http://localhost:8080/cars`);
//     return maindata
//   };

//   /* So basically here i'm getting data form store and setting into setCarsAPIData(data)
//     and passing CarsAPIData when it change useEffect re-rendor and it work until data length...
//   */

//   //   const handleCarTypes = (e) => {
//   //     const datatoset = data.filter((ele) => ele.type == e.target.value);
//   //     setCarsAPIData(datatoset);
//   //   };

//   //   const HandleLowtoHigh = (e) => {
//   //     const datatoset = data.filter((ele) => ele.type == e.target.value);
//   //     setCarsAPIData(datatoset);
//   //   };

//   //   useEffect(() => {
//   //     setCarsAPIData(data);
//   //     dispatch(getCarData());
//   //   }, [data.length, CarsAPIData]);

//   console.log("datamain Cars Page", CarsAPIData);

//   //   useEffect(() => {
//   //     //   dispatch(getCarDataASC());

//   //     dispatch(getCarData());
//   //   }, [data.length]);

//   useEffect(() => {
//     fetchDesc();
//     setCarsAPIData(maindata);
//   }, []);
//   //   if (loading) return <div>Loading...</div>;
//   //   else if (error) return <div>Error...</div>;
//   /* 
//   className={cars. }
//   */
//   //  else
//   return (
//     <>
//       <div className={cars.IndexMain}>
//         <div className={cars.IndexLeft}>
//           <div className={cars.SortingTag}>
//             <h1 style={{ fontWeight: "600" }}>Sort & Filters</h1>
//             <p
//               onClick={() => {}}
//               style={{ fontWeight: "700", color: "#10A310", cursor: "pointer" }}
//             >
//               RESET
//             </p>
//           </div>
//           <br />
//           <p>Sort By</p>
//           <div className={cars.ButtonFirstGrid}>
//             <div onClick={() => setCarsAPIData(descdata)}>
//               <BiRupee className={cars.icons} />
//               <span>Low to High</span>
//             </div>
//             <div>
//               <BiRupee className={cars.icons} />
//               <span>High to Low</span>
//             </div>
//             <div>
//               <AiOutlineStar className={cars.icons} />
//               <span>Best Rating</span>
//             </div>
//           </div>

//           <br />
//           <p>Car type</p>
//           <div className={cars.ButtonFirstGrid}>
//             <div>
//               <FaCarSide className={cars.icons} />
//               <span>SUV</span>
//             </div>
//             <div>
//               <FaCarSide className={cars.icons} />
//               <span>Sedan</span>
//             </div>
//             <div>
//               <FaCarSide className={cars.icons} />
//               <span>Hatchback</span>
//             </div>
//           </div>

//           <br />
//           <p>Seats Type</p>
//           <div className={cars.ButtonFirstGrid}>
//             <div>
//               <GiCarSeat className={cars.icons} />
//               <span>2 Seats</span>
//             </div>
//             <div>
//               <GiCarSeat className={cars.icons} />
//               <span>4 Seats</span>
//             </div>
//           </div>

//           <br />
//           <p>Transmission</p>
//           <div className={cars.ButtonFirstGrid}>
//             <div>
//               <GiGearStickPattern className={cars.icons} />
//               <span>Manual</span>
//             </div>
//             <div>
//               <GiGearStickPattern className={cars.icons} />
//               <span>Auto</span>
//             </div>
//           </div>

//           <br />
//           <p>Fuel</p>
//           <div className={cars.ButtonFirstGrid}>
//             <div>
//               <FaGasPump className={cars.icons} />
//               <span>Petrol</span>
//             </div>
//             <div>
//               <FaGasPump className={cars.icons} />
//               <span>Diesal</span>
//             </div>
//           </div>
//         </div>

//         <div className={cars.Rightsection}>
//           {CarsAPIData.map((items, i) => (
//             <div key={i} className={cars.mappingContainer}>
//               <div>
//                 <img
//                   style={{
//                     width: "350px",
//                     height: "220px",
//                     borderRadius: "5px",
//                   }}
//                   src={items.image}
//                   alt=""
//                 />
//               </div>
//               <div style={{ marginTop: "0.6rem" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <h1 className={cars.RightsectionH1}>{items.title}</h1>
//                   <p style={{ paddingRight: "1.5rem" }}>⭐ {items.rating}</p>
//                 </div>
//                 <div className={cars.RightsectionSpans}>
//                   <span>{items.fueltype}</span>
//                   <span>{items.fueltype}</span>
//                   <span>{items.fueltype}</span>
//                 </div>
//                 <h1 className={cars.RightsectionH1}>₹ {items.price}</h1>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CarsPage;
