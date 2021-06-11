import React from 'react'
import "../Style.css"
import Timer from './Timer';
function Welcome() {
    var today = new Date();
    let hour = today.getHours()*60*60;
    var minutes = today.getMinutes()*60;
    var seconds = today.getSeconds();
    let result = hour+minutes+seconds;
    result+=10*60;
    localStorage.setItem('endtime',result);
    let check = localStorage.getItem('order')?true:false;
    const movie = localStorage.getItem('moviename');
    const firstperson = localStorage.getItem('one');
    const secondperson = localStorage.getItem('two');
    const thirdperson = localStorage.getItem('three');
    const fourthperson = localStorage.getItem('four');
    const fivthperson = localStorage.getItem('five');
    const sixthperson = localStorage.getItem('six');
    const soda = localStorage.getItem('soda');
    const cola = localStorage.getItem('cola');
    const nachos = localStorage.getItem('nachos');
    const candy = localStorage.getItem('candy');
    const book = () =>{
        console.log('clicked')
        window.location.href = '/booking';
    }
    return (
        <div className="container">
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
                <button type="submit" className="butt" style={{color:"#064460"}} onClick={book}>BOOK TICKETS NOW</button>
                 </div>
                <div className="right"> 
                <br></br>
                <br></br>
                <br></br>
                {!check&& <Timer/>}
                </div>
              </div>
            {check&&
            <div style={{marginTop:"13%"}}>
                <h2 style={{ fontSize: "300%", color: "white"}}>Privious booking on this site</h2>
                <li style={{fontSize: "160%", color:"white"}}>{movie}</li>
                <li style={{fontSize: "160%", color:"white"}}>Seats:
                    <p style={{fontSize: "70%", color:"white"}}>1. {firstperson}</p>
                    <p style={{fontSize: "70%", color:"white"}}>2. {secondperson}</p>
                    <p style={{fontSize: "70%", color:"white"}}>3. {thirdperson}</p>
                    <p style={{fontSize: "70%", color:"white"}}>4. {fourthperson}</p>
                    <p style={{fontSize: "70%", color:"white"}}>5. {fivthperson}</p>
                    <p style={{fontSize: "70%", color:"white"}}>6. {sixthperson}</p>
                </li>
                <li style={{fontSize: "160%" , color:"white"}}>Soda: {soda}</li>
                <li style={{fontSize: "160%", color:"white"}}> Cola: {cola}</li>
                <li style={{fontSize: "160%", color:"white"}}> Candy: {candy}</li>
                <li style={{fontSize: "160%", color:"white"}}> Nachos: {nachos}</li>
            </div>}
        </div>
    )
}

export default Welcome
