import React from "react";
import BANKING from "../../Styles/Banking.module.css";

const Banking = () => {
  return (
    <div className={BANKING.bankingDiv}>
   
      <div className={BANKING.optionsDiv}>
        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>HDFC Bank</h3>
          </div>
        </div>

        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>ICICI Netbanking</h3>
          </div>
        </div>

        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>Axios Bank</h3>
          </div>
        </div>

        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/cf379c07cb78c1e7bc476990125e2f2dfc48c46c.png?1584602048"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>Kotak Bank</h3>
          </div>
        </div>

        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/c60a9d56b73f754951266d949ebadaf86cc0bb3f.png?1584602027"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>Yes Bank</h3>
          </div>
        </div>

        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/b231e4ec4fc0862465537b9f916908ceb9ad8486.png?1584454582"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>Canara Bank</h3>
          </div>
        </div>

        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/27eac78721d3d14bc9df34231bce661e1d510e8f.png?1584602001"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>State Bank Of India</h3>
          </div>
        </div>

        <div>
          <div class={BANKING.image}>
            <img
              src="https://zoomcar-assets.zoomcar.com/images/original/e240b3b08e01c6526a1e3a8eb8601f6c16e793e5.png?1584454522"
              alt="upi"
              width={"70px"}
              height={"70px"}
            />
          </div>
          <div class={BANKING.head2}>
            <h3>Union Bank Of India</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;
