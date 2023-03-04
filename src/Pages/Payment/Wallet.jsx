import React from "react";
import WALLET from "../../Styles/Wallet.module.css";

const Wallet = () => {
  return (
    <>
      <div className={WALLET.walletDiv}>
        <div className={WALLET.walletDivMain}>
          <div id={WALLET.lock}>
            <p>Mobile Wallet</p>
            <div>
              <img
                src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
                alt="lock"
                height={"50px"}
                width={"50px"}
              />
            </div>
          </div>

        
          <div id={WALLET.wallet}>
            <div id={WALLET.image}>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
                alt="paytm"
                className={WALLET.imagepaytm}
              />
            </div>
            <div id={WALLET.head2}>
              <h2>Payment Wallet</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
