import React from 'react'


const mainDiv={display:"flex",justifyContent:"space-between",marginTop:"20px"}


const Credit = () => {
  return (
    <>
       <div style={{backgroundColor:"white",color:"black", width:"500px",margin:"auto",padding:"5px",marginTop:"5px"}} >
       <div style={mainDiv} >
        <div>
        <h1 style={{fontWeight:"bold",fontSize:"25px"}}>Enter Card Details</h1>
        <p> Amount: ₹5000.0</p>
        </div>

        <div>
            <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="lock" width="50px" height={"50px"} />
        </div>

        </div>

        {/* input box */}
        <input type="number" placeholder=' Card Number' style={{border:"1px solid grey",height:"50px",width:"450px"}}  />
        <div style={{display:"flex" ,justifyContent:"space-between" ,height:"50px",width:"450px",marginTop:"50px"}}>
            <input type="text" placeholder='   Expiry (MM/YY) '  style={{border:"1px solid grey",height:"50px",width:"220px"}}/>
            <input type="text" placeholder='  CVV'  style={{border:"1px solid grey",height:"50px",width:"220px"}}/>
        </div>
        <br/> 
        <input type="checkbox" name="" id="" /><span style={{color:"grey"}}>  Securely save card details</span>
       
       </div>
    </>
  )
}

export default Credit