import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Credit = () => {
  const [card, setcard] = useState("");
  const [cvv, setcvv] = useState("");
  const [month, setmonth] = useState("");
  const nav = useNavigate();

  console.log("card value", card);
  console.log("cvv value", cvv);
  console.log("month value", month);

  const handleSubmit = () => {
    if (card.length < 16 || card.length > 16) {
      alert("Card should have 16 digit, check once again");
    }
    if (month.length === 0) {
      alert("Month can't be empty");
    }
    if (cvv.length !== 3) {
      alert("CVV should contain 3 digits");
    }
    if (month.length !== 0 && cvv.length === 3 && card.length === 16) {
      nav("/success");
    }
  };

  return (
    <div>
      <div className="CreditMaindiv">
        <div className="CreditMaindivSecond">
          <div style={{ marginTop: "1rem" }}>
            <h1 className="CreditSecondH1">Enter Card Details</h1>
         
          </div>
        </div>

        <input
          className="CreditFirstInputBox"
          value={card}
          onChange={(e) => setcard(e.target.value)}
          type="number"
          placeholder="  Card Number"
        />

        <div className="CreditSecondDiv">
          <input
            className="CreditFirstInputBox2"
            onChange={(e) => setmonth(e.target.value)}
            type="  month"
            placeholder="   Expiry (MM/YY) "
          />
          <input
            onChange={(e) => setcvv(e.target.value)}
            type="number"
            placeholder="  CVV"
            className="CreditFirstInputBox3"

          />
        </div>

        <br />
        <input type="checkbox" name="" id="" />
        <span style={{ color: "grey" }}> Securely save card details</span>

        <div>
          <button className="creditButton" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credit;
