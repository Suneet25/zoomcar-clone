import React from "react";
import Carousel from "react-multi-carousel";
import styles from "../../Styles/HomePage.module.css";
import "react-multi-carousel/lib/styles.css";
import { Heading,Box } from "@chakra-ui/react";
let imageData = [
  {
    id: 1,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/961f00a2e507aa615fa157e4f501d2dd2fdf72d0.png?1663872507",
    price: "₹ 240 per hour",
    type: "Honda City Petrol",
  },
  {
    id: 2,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/906a902c17d01b78ad2282bb55827d34cde78046.JPG?1644671544",
    price: "₹ 130 per hour",
    type: "Maruti Tour S MT Diesel",
  },
  {
    id: 3,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/bf87fc5666104402c03090d7c1a035a5bc21a065.png?1663872840",
    price: "₹ 210 per hour",
    type: "Hyundai Creta Petrol",
  },
  {
    id: 4,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/333bab35eba4832b590e5dd5cddd34c18ff1c001.png?1663872779",
    price: "₹ 130 per hour",
    type: "Maruti Tour S MT Diesel",
  },
  {
    id: 5,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/14a199efc141a4279be3d232c528cdd4d79acfdc.png?1663873624",
    price: "₹ 210 per hour",
    type: "Hyundai Creta Petrol",
  },
  {
    id: 6,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/6d446db20dca0c731bb5f7e7ed70f35b16d44b45.png?1663875870",
    price: "₹ 130 per hour",
    type: "Maruti Tour S MT Diesel",
  },
  {
    id: 7,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/fdcb7a6875742b44caadf0a7aa9b7046c118e7c3.png?1663872683",
    price: "₹ 210 per hour",
    type: "Hyundai Creta Petrol",
  },
  {
    id: 8,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/f39bcb1945a5efd3a2462a14dbf39d8d06ceb0aa.png?1663873982",
    price: "₹ 130 per hour",
    type: "Maruti Tour S MT Diesel",
  },
  {
    id: 9,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/2dc0474b442a8e5a3c2440c19d63549938cd1283.png?1663873864",
    price: "₹ 130 per hour",
    type: "Maruti Tour S MT Diesel",
  },
  {
    id: 10,
    image:
      "https://zoomcar-assets.zoomcar.com/photographs/original/13284dce101cd7020c977103e2cb5f33bee3b0e9.png?1663874479",
    price: "₹ 210 per hour",
    type: "Hyundai Creta Petrol",
  },
];


//second data carausal
let imageData2 = [
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

const CorouselOne = () => {
  const responsive1 = {
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

  //second responsive
  const responsive2 = {
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

  //second responive box
  return (
    <>
    <div style={{ display: "grid" }}>
      <Carousel responsive={responsive1} transitionDuration={1000}>
        {imageData.map((el) => {
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

    {/* second carausal div */}
    <div style={{ display: "grid" }}>
      <Carousel responsive={responsive2} transitionDuration={1000}>
        {imageData2.map((el) => {
          return (
            <div className={styles.ExploreDiv2} key={el.id}>
              <div style={{ position: "relative", paddingTop: "50px" }}>
                <img
                  className={styles.ExploreDivImg2}
                  src={el.image}
                  alt="rty"
                  height={{ lg: "100%", md: "80%", sm: "60%" }}
                  width="100%"
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
    </>
  );
};

export default CorouselOne;
