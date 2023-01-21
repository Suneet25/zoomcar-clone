import React from "react";
import Carousel from "react-multi-carousel";
import styles from "../../Styles/HomePage.module.css";
import "react-multi-carousel/lib/styles.css";
import { Heading, Box } from "@chakra-ui/react";
let imageData = [
  {
    id: 1,
    image:
      "https://zoomcar-assets.zoomcar.com/images/original/d09afb8f29763525cd9823221791be7188b31460.png?1672044204",

    title: "Enjoy Unlimited Kilometers",
  },
  {
    id: 2,
    image:
      "https://zoomcar-assets.zoomcar.com/images/original/92ede006e6e6bf849d2fe715761e3e6833aad5ec.png?1671712552",

    title: "Zero Security Deposit",
  },
  {
    id: 3,
    image:
      "https://zoomcar-assets.zoomcar.com/images/original/ac74c0e87023949496768b9557c52936bc35090b.png?1672044356",

    title: "100% Free Cancellation ",
  },
  {
    id: 4,
    image:
      "https://zoomcar-assets.zoomcar.com/images/original/5d9694e98e7716aab66ea6e0a0f6b7bd7a4958c8.png?1672044544",

    title: "Zero Toll Charges",
  },
  {
    id: 5,
    image:
      "https://zoomcar-assets.zoomcar.com/images/original/bb32fcf3eb9047ee20809f2dbf6e88ae739fb4d9.png?1672044584",

    title: "Reshedule For Free",
  },
];

const CorouselTwo = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        {imageData.map((el) => {
          return (
            <div className={styles.ExploreDiv2} key={el.id}>
              <div style={{ position: "relative", paddingTop: "50px" }}>
                <img
                  className={styles.ExploreDivImg2}
                  src={el.image}
                  alt="rty"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "7%",
                  width: "80%",
                }}
              >
                <Heading
                  as="h2"
                  size="xl"
                  color="white"
                  marginLeft="10px"
                  textAlign={"left"}
                >
                  {el.title}
                </Heading>
              </div>
              {/* <h1 className={styles.Exploreh1}>{el.type}</h1>
              <p style={{ color: "#6b6b6b" }}>{el.no_of_item}</p> */}
            </div>
          );
        })}
      </Carousel>
      <Box
        style={{
          position: "relative",
          backgroundColor: "white",

          paddingTop: "70px",
          paddingBottom: "40px",
        }}
      >
        <Heading
          style={{
            textAlign: "center",
            fontFamily: "IBM Plex Sans",

            fontWeight: "500",
            lineHeight: "1",
            fontSize: "clamp(14px, 3vw, 32px)",
            color: "#1f1f1f",
          }}
        >
          WE LOVE GIVING BEST EXPERIENCES
        </Heading>
        <Heading
          style={{
            textAlign: "center",
            fontFamily: "IBM Plex Sans",

            fontWeight: "300",

            color: "#1f1f1f",
            marginTop: "20px",
          }}
          as={"h6"}
          size="md"
        >
          We cover you under all the circumstances to ensure the best journey
        </Heading>
      </Box>
    </div>
  );
};

export default CorouselTwo;
