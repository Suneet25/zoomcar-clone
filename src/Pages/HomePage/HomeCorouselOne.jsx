import React from "react";
import Carousel from "react-multi-carousel";
import styles from "../../Styles/HomePage.module.css";
import "react-multi-carousel/lib/styles.css";
import { Heading } from "@chakra-ui/react";
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
  );
};

export default CorouselOne;
