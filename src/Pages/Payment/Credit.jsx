import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const mainDiv = { display: "flex", justifyContent: "space-between", marginTop: "20px" }


const Credit = () => {
  const [card, setcard] = useState("")
  const [cvv, setcvv] = useState("")
  const [month, setmonth] = useState("")
  const nav=useNavigate()

  console.log("card value", card)
  console.log("cvv value", cvv)
  console.log("month value", month)




  const handleSubmit = () => {
    if (card.length < 16 || card.length > 16) {
      alert("Card should have 16 digit, check once again")
    }
    if (month.length === 0) {
      alert("Month can't be empty")
    }
    if (cvv.length !== 3) {
      alert("CVV should contain 3 digits")
    }
    if(month.length!==0 && cvv.length===3 && card.length===16) {
     nav("/success")
    }

  }






  return (
    <>
      <div style={{ backgroundColor: "white", color: "black", width: "500px", margin: "auto", padding: "5px", marginTop: "5px" }} >
        <div style={mainDiv}>
          <div>
            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>Enter Card Details</h1>
            <p> Amount: ₹5000.0</p>
          </div>

          <div>
            <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="lock" width="50px" height={"50px"} />
          </div>

        </div>

        {/* input boxes */}
        <input value={card} onChange={(e) => setcard(e.target.value)} type="number" placeholder='  Card Number' style={{ border: "1px solid grey", height: "50px", width: "450px", padding: "10px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", height: "50px", width: "450px", marginTop: "50px" }}>
          <input onChange={(e) => setmonth(e.target.value)} type="  month" placeholder='   Expiry (MM/YY) ' style={{ border: "1px solid grey", height: "50px", width: "220px", padding: "10px" }} />
          <input onChange={(e) => setcvv(e.target.value)} type="number" placeholder='  CVV' style={{ border: "1px solid grey", height: "50px", width: "220px", padding: "10px" }} />
        </div>

        <br />
        <input type="checkbox" name="" id="" /><span style={{ color: "grey" }}>  Securely save card details</span>

        <div>
          <button className="creditButton" onClick={handleSubmit} >Submit</button>
        </div>

      </div>
    </>
  )
}

export default Credit