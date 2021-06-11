import React, { useEffect, useState } from 'react'
import "../Style.css"
import Timer from './Timer';
function Seat() {
    const movie = localStorage.getItem('moviename');
    const [one ,setOne] = useState("");
    const [two ,setTwo] = useState("");
    const [three ,setThree] = useState("");
    const [four ,setFour] = useState("");
    const [five ,setFive] = useState("");
    const [six ,setSix] = useState("");
    const seatBook = () =>{
        localStorage.setItem('one',one);
        localStorage.setItem('two',two);
        localStorage.setItem('three',three);
        localStorage.setItem('four',four);
        localStorage.setItem('five',five);
        localStorage.setItem('six',six);
        window.location.href = '/snacks';
    }
    return (
        <div className="container">
              <div className="row">
                <div className="left"> 
                <h1 className="head">CINEWEST</h1>
                 </div>
                <div className="right"> 
                    <p className="mp">ORDER: {movie}</p>
                </div>
              </div>
              <h1 style={{color: "#3782a3", fontSize: "411%" , margin: "0", paddingTop: "18%"}}>ASSING SEATS</h1>
              <p style={{color: "white", fontSize: "186%" , margin: "0", paddingTop: "2%"}}> DARG NAMES TO THE RIGHT TO FILL UP ALL AVAILABLE SEATS</p>
              <div className="row">
                <div className="left"> 
                    <h1 style={{color: "white", fontSize: "280%" , margin: "0", paddingTop: "8%"}}>GUESTS</h1>
                    <ul>
                        <li style={{fontSize: "160%", color:"white"}}>THOMAS</li>
                        <li style={{fontSize: "160%", color:"white"}}>FRED</li>
                        <li style={{fontSize: "160%", color:"white"}}>AMIN</li>
                        <li style={{fontSize: "160%", color:"white"}}>LAURA</li>
                        <li style={{fontSize: "160%", color:"white"}}>JANA</li>
                        <li style={{fontSize: "160%", color:"white"}}>RUHUL</li>
                    </ul>
                 </div>
                <div className="right" style={{color: "white"}}> 
                    <p style={{color: "white", fontSize: "280%" , margin: "0", paddingTop: "8%"}}>AVAILABLE SEAT</p>
                     1.{one}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={one}
                          onChange={(e) => setOne(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="thomas">THOMAS</option>
                          <option value="fred">FRED</option>
                          <option value="amin">AMIN</option>
                          <option value="laura">LAURA</option>
                          <option value="jana">JANA</option>
                          <option value="ruhul">RUHUL</option>
                    </select>
                    2.{two}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={two}
                          onChange={(e) => setTwo(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="thomas">THOMAS</option>
                          <option value="fred">FRED</option>
                          <option value="amin">AMIN</option>
                          <option value="laura">LAURA</option>
                          <option value="jana">JANA</option>
                          <option value="ruhul">RUHUL</option>
                    </select>
                    <br></br>
                    3.{three}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={three}
                          onChange={(e) => setThree(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="thomas">THOMAS</option>
                          <option value="fred">FRED</option>
                          <option value="amin">AMIN</option>
                          <option value="laura">LAURA</option>
                          <option value="jana">JANA</option>
                          <option value="ruhul">RUHUL</option>
                    </select>
                    <br/>
                    4.{four}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={four}
                          onChange={(e) => setFour(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="thomas">THOMAS</option>
                          <option value="fred">FRED</option>
                          <option value="amin">AMIN</option>
                          <option value="laura">LAURA</option>
                          <option value="jana">JANA</option>
                          <option value="ruhul">RUHUL</option>
                    </select>
                    <br/>
                    5.{five}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={five}
                          onChange={(e) => setFive(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="thomas">THOMAS</option>
                          <option value="fred">FRED</option>
                          <option value="amin">AMIN</option>
                          <option value="laura">LAURA</option>
                          <option value="jana">JANA</option>
                          <option value="ruhul">RUHUL</option>
                    </select>
                    <br/>
                    6.{six}<select
                          className="form-control select2"
                          style={{ width: '100%' }}
                          value={six}
                          onChange={(e) => setSix(e.target.value)}
                        >
                          <option selected="selected" value="">
                          </option>
                          <option value="thomas">THOMAS</option>
                          <option value="fred">FRED</option>
                          <option value="amin">AMIN</option>
                          <option value="laura">LAURA</option>
                          <option value="jana">JANA</option>
                          <option value="ruhul">RUHUL</option>
                    </select>
                </div>
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
                 <button type="submit"className="rbutt" style={{color: "#3782a3"}}  onClick={seatBook}>NEXT</button>
                </div>
              </div>
        </div>
    )
}

export default Seat
