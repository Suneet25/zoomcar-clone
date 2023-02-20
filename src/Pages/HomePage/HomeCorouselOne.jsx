import React from "react";
import Carousel from "react-multi-carousel";
import styles from "../../Styles/HomePage.module.css";
import "react-multi-carousel/lib/styles.css";
import { Heading } from "@chakra-ui/react";
import { CorouselOneData } from "../../data/CorouselsData";
const CorouselOne = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{ display: "grid" }}>
      <Carousel responsive={responsive} transitionDuration={1000}>
        {CorouselOneData.map((el) => {
          return (
            <div className={styles.ExploreDiv} key={el.id}>
              <div style={{ position: "relative", paddingTop: "50px" }}>
                <img
                  className={styles.ExploreDivImg}
                  src={el.image}
                  alt="rty"
                />
              </div>
              <div style={{ position: "absolute", top: "10%", left: "25%" }}>
                <Heading
                  as={"h2"}
                  size={"lg"}
                  color="#a8a8a8"
                  fontWeight="600"
                  fontSize="calc(min(2vw, 48px))"
                >
                  {el.price}
                </Heading>
                <Heading
                  as={"h2"}
                  size={"lg"}
                  color="#666"
                  fontWeight="600"
                  fontSize="calc(min(2vw, 48px))"
                >
                  {el.type}
                </Heading>
              </div>
              {/* <h1 className={styles.Exploreh1}>{el.type}</h1>
              <p style={{ color: "#6b6b6b" }}>{el.no_of_item}</p> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CorouselOne;
