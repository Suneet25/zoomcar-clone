import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import single from "../../Styles/SingleCarsPage.module.css";
import { getSingleCarsData } from "../../Redux/CarsData/carsData.action";

const SingleCarsPage = () => {
  const dispatch = useDispatch();
  const [SinglePageData, setSinglePageData] = useState({});
  const { data } = useSelector((store) => store.CarsReducer);

  //   <FaArrowLeft cursor="pointer" onClick={() => navigate("/")} />
  const { id } = useParams();
  console.log("id ", id);
  console.log("data ", data);

  useEffect(() => {
    dispatch(getSingleCarsData(id));
    setSinglePageData(data);
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
                  <h1 className={single.LeftSectionImgDivh1}>{data.title}</h1>
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
                  I hereby agree to the terms and conditions of the Lease Agreement with Host
                  </p>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>

          <div className={single.RightSection}></div>
        </div>
      </div>
    </>
  );
};

export default SingleCarsPage;
