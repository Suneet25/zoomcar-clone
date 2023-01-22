import React, { useEffect, useState } from "react";
import SUCCESS from "../../Styles/Success.module.css";

const Success = () => {
  const [heading, setHeading] = useState(
    "please wait, transection is processing..."
  );
  const [Image, setImage] = useState("https://i.gifer.com/BvMu.gif");

  const handleSuccess = () => {
    setHeading("Payment Successful");
    setImage("https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif");
  };

  useEffect(() => {
    setTimeout(() => {
      handleSuccess();
    }, 3000);
  }, []);
  return (
    <div className={SUCCESS.sucDiv}>
      <div>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <h1>{heading}</h1>
      <div>
        <img src={Image} alt="success" />
      </div>
    </div>
  );
};

export default Success;
