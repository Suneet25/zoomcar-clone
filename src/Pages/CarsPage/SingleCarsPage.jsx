import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import single from "../../Styles/SingleCarsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCarsData } from "../../Redux/CarsData/carsData.action";
import Payment from "../Payment/Payment";

const SingleCarsPage = () => {
  const { data } = useSelector((store) => store.CarsReducer);
  const [Carprice, setCarprice] = useState(data.price);
  const [update, setupdate] = useState(0);
  const dispatch = useDispatch();
  const Basic = 375;
  const Standerd = 436;
  const Advance = 465;

  // console.log(data)

  const { id } = useParams();

  const handleValueChange = () => {
    setCarprice(Number(data.price));
    setupdate(Basic + data.price);
  };
  const handleValueChange2 = () => {
    setCarprice(Number(data.price));
    setupdate(Standerd + data.price);
  };
  const handleValueChange3 = () => {
    setCarprice(Number(data.price));
    setupdate(Advance + data.price);
  };

  const handlePassdata = () => {
    localStorage.setItem("userdata", JSON.stringify(data));
  };

  useEffect(() => {
    dispatch(getSingleCarsData(id));
  }, [id]);
  return (
    <>
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "#F5F5F5" }}
      >
        <div className={single.parent}>
          <div className={single.LeftSection}>
            <div className={single.LeftSectionImgDiv}>
              <img
                className={single.LeftImage}
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className={single.LeftSectionImgDivParent}>
              <div className={single.LeftSectionImgDivSecond}>
                <div>
                  <h1 className={single.LeftSectionImgDivh1}>
                    {data.title} {`(${data.fueltype})`}
                  </h1>
                  <div className={single.LeftSectionSpans}>
                    <span>{data.fueltype} </span>
                    <span>{data.seats}</span>
                    <span>{data.type}</span>
                    <span>{data.transmission}</span>
                  </div>
                </div>
                <div>
                  <h1 className={single.LeftSectionImgDivh1}>🙍‍♂️ Iron Man</h1>
                  <span style={{ fontSize: "13px" }}>
                    ZoomHost since Jan'21
                  </span>
                </div>
              </div>
              <hr />
              <div className={single.LeftRatingSection}>
                <h1>⭐ {data.rating}</h1>
              </div>
            </div>
            <div className={single.LeftSectionIFrameSection}>
              <div>
                <iframe
                  style={{ height: "18rem" }}
                  src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  title="."
                ></iframe>
              </div>
              <div className={single.LeftSectionPolicy}>
                <h1>Keep in Mind</h1>
                <div>
                  <h1>Fare & Fuel Policy</h1>
                  <p>
                    Fare is inclusive of all taxes. Kindly return the car at the
                    same fuel level as the trip start time
                  </p>
                </div>
                <div>
                  <h1>Cancellation Policy</h1>
                  <p>
                    Hassle free cancellations and refunds at nominal charges
                  </p>
                </div>
                <div>
                  <h1>Agreement Policy</h1>
                  <p>
                    I hereby agree to the terms and conditions of the Lease
                    Agreement with Host
                  </p>
                  <div>
                    <label class={single.container}>
                      <input type="checkbox" />
                      <span class={single.checkmark}></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={single.RightSection}>
            <div>
              <h1>Other Charges</h1>
              <p>Convenience Fee (₹199) ₹99</p>
            </div>
            <div className={single.RightSectionProtection}>
              <h1>TRIP PROTECTION PACKAGE</h1>
              <div className={single.RightSectionProtectionDiv}>
                <div>
                  <b>1. Basic (₹375)</b>
                  <div>
                    <label class={single.container}>
                      <input onClick={handleValueChange} type="checkbox" />
                      <span class={single.checkmark}></span>
                    </label>
                  </div>
                </div>
                <p>You pay up to INR 3499 in case of any damage</p>
              </div>
              <div className={single.RightSectionProtectionDiv}>
                <div>
                  <b>2. Standard (₹436)</b>
                  <div>
                    <label class={single.container}>
                      <input onClick={handleValueChange2} type="checkbox" />
                      <span class={single.checkmark}></span>
                    </label>
                  </div>
                </div>
                <p>You pay up to INR 999 in case of any damage</p>
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#10a310",
                    fontSize: "14px",
                  }}
                >
                  RECOMMENDED FOR YOU
                </h3>
              </div>
              <div className={single.RightSectionProtectionDiv}>
                <div>
                  <b>3. Peace of Mind (₹465)</b>
                  <div>
                    <label class={single.container}>
                      <input onClick={handleValueChange3} type="checkbox" />
                      <span class={single.checkmark}></span>
                    </label>
                  </div>
                </div>
                <p>You pay up to INR 99 in case of any damage</p>
              </div>
            </div>
            <div className={single.RightSectionProtectionWorks}>
              <h1>How Trip Protection Works?</h1>
              <p>
                • Zoomcar will assist in damage repair costs up to the amount as
                per the maximum deductible limit. • Does not cover any
                third-party liability or any intentional damage or damage that
                occurred due to intoxication or high speed, rash, or negligent
                driving. • Please read Zoomcar policy to know more.
              </p>
            </div>
            <div className={single.RightSectionPriceandCoupon}>
            
              <h1>₹ {update > data.price ? update : data.price}</h1>
              <p>🏷️Apply Coupon</p>
            </div>
            <Link to="/payment">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={handlePassdata}
                  className={single.RightSectionPayButton}
                >
                  PROCCED TO PAY ₹ {update > data.price ? update : data.price}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCarsPage;
