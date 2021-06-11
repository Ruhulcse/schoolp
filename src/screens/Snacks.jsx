import React, { useState } from 'react'
import Timer from './Timer';
import "../Style.css"
function Snacks() {
    const movie = localStorage.getItem('moviename');
    const firstperson = localStorage.getItem('one');
    const secondperson = localStorage.getItem('two');
    const thirdperson = localStorage.getItem('three');
    const fourthperson = localStorage.getItem('four');
    const fivthperson = localStorage.getItem('five');
    const sixthperson = localStorage.getItem('six');
    const [nachos, setNachos] = useState("");
    const [cola, setCola] = useState("");
    const [candy, setCandy] = useState("");
    const [soda, setSoda] = useState("");


    const next = () => {
      localStorage.setItem('nachos',nachos);
      localStorage.setItem('cola',cola);
      localStorage.setItem('candy',candy);
      localStorage.setItem('soda', soda);
      window.location.href = '/summary';
    }
    return (
        <div className="container">
               <div className="row">
                <div className="left"> 
                <h1 className="head">CINEWEST</h1>
                 </div>
                <div className="right"> 
                    <p className="mp">ORDER: {movie}</p>
                    <p className="movielist">1. {firstperson}</p>
                    <p className="movielist">2. {secondperson}</p>
                    <p className="movielist">3. {thirdperson}</p>
                    <p className="movielist">4. {fourthperson}</p>
                    <p className="movielist">5. {fivthperson}</p>
                    <p className="movielist">6. {sixthperson}</p>
                </div>
              </div>
              <h1 className="sn">Snacks</h1>
              <div className="row">
              <label for="pwd" className="find">Cola</label>
              <input
                type="text"
                id="pwd"
                placeholder=""
                name="q"
                onChange={(e) => setCola(e.target.value)}
              />
              <br/>
              <label for="pwd" className="find">Nachos</label>
              <input
                type="text"
                id="pwd"
                placeholder=""
                name="q"
                onChange={(e) => setNachos(e.target.value)}
              />
              <br/>
              <label for="pwd" className="find">Candy</label>
              <input
                type="text"
                id="pwd"
                placeholder=""
                name="q"
                onChange={(e) => setCandy(e.target.value)}
              />
              <br/>
              <label for="pwd" className="find">Soda</label>
              <input
                type="text"
                id="pwd"
                placeholder=""
                name="q"
                onChange={(e) => setSoda(e.target.value)}
              />
              </div>
              <div className="row">
                <div className="left"> 
                <br></br>
                <br></br>
                <br></br>
                 </div>
                <div className="right"> 
                <br></br>
                <br></br>
               <Timer/>
               <br></br>
                <br></br>
                 <button type="submit"className="rbutt" style={{color: "#3782a3"}} onClick={next}>NEXT</button>
                </div>
              </div>
        </div>
    )
}

export default Snacks