import React from 'react'
import "../Style.css"
function Welcome() {
    return (
        <div className="container">
            <h1 style={{margin: "0"}}>.</h1>
            <h1 className="head">CINEWEST</h1>
            <h2 className="welcome">WELCOME ON CINEWEST</h2>
            <p className="description">
            READY FOR A NIGHT OUT? BE OUR GUEST CINEWEST.
           </p>
           <p className="description">SPORTING 5 SCREENS AND OPEN 7DAYS A WEEK,
            WE ARE HERE FOR YOUR</p>
            <p className="description">ENTERTAINEMNT!</p>
            <br></br>
            <br></br>
            <div className="row">
                <div className="left"> 
                <br></br>
                <br></br>
                <br></br>
                <button type="submit" className="butt" style={{color:"#064460"}}>BOOK TICKETS NOW</button>
                 </div>
                <div className="right"> 
                <br></br>
                <br></br>
                <br></br>
                 <button type="submit"className="rbutt" style={{color: "#3782a3"}} >10.00</button>
                </div>
              </div>
            {/* {!check?(<div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Timer/>
                </div>):(
                <div>
                 <h2 style={{ fontSize: "300%"}}>Privious booking on this site</h2>
                <li style={{fontSize: "160%"}}>{movie}</li>
                <li style={{fontSize: "160%"}}>Seats:
                    <p style={{fontSize: "70%"}}>1. {firstperson}</p>
                    <p style={{fontSize: "70%"}}>2. {secondperson}</p>
                    <p style={{fontSize: "70%"}}>3. {thirdperson}</p>
                    <p style={{fontSize: "70%"}}>4. {fourthperson}</p>
                    <p style={{fontSize: "70%"}}>5. {fivthperson}</p>
                    <p style={{fontSize: "70%"}}>6. {sixthperson}</p>
                </li>
                <li style={{fontSize: "160%"}}>Popcorn: {popcorn}</li>
                <li style={{fontSize: "160%"}}>Number of Cola: {cola}</li>
                </div>
            )} */}
        </div>
    )
}

export default Welcome
