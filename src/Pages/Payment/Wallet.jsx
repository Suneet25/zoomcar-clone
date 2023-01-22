import React from "react";
const mainDiv = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

const Wallet = () => {
  return (
    <>
      <div
        className="WalletMainContainer"
        style={{
          backgroundColor: "white",
          color: "black",
          width: "55%",
          padding: "1rem ",
          marginTop: "5px",
          margin:'auto',
          borderRadius:'8px'
        }}
      >
        <div style={mainDiv}>
          <div>
            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>
              Mobile Wallet
            </h1>
          </div>

          <div>
            <img
              src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
              alt="lock"
              width="50px"
              height={"50px"}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <img
            src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
            alt="paytm_logo"
            width="40px"
            height={"30px"}
          />
          <p>Payment Wallet</p>
        </div>
      </div>
    </>
  );
};

export default Wallet;
