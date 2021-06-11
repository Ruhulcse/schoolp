import React from 'react'
import Timer from './Timer';
import "../Style.css"
function summary() {
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
    const next = () =>{
        localStorage.setItem('order',"yes");
        window.location.href = '/';
    }
    return (
        <div className="container">
         <h1 className="head">CINEWEST</h1>
         <h2  className="welcome">THANK YOU FOR YOUR ORDER!</h2>
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
           <div className="row">
               <div className="right">
                 <button type="submit"className="rbutt" style={{color: "#3782a3"}} onClick={next}>NEXT</button>
               </div>
            </div>
        </div>
    )
}

export default summary
