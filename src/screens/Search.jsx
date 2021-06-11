import React, { useState,useEffect } from 'react'
import "../Style.css"
import Fuse from 'fuse.js'
import Timer from './Timer';
function Search() {
    const [movielist, setMobilist] = useState([
        {
            id: 1,
            name: "THE HUNGER GAMES"
        },
        {
            id: 2,
            name: "TITANIC"
        },
        {
            id: 3,
            name: "INCEPTION"
        }
        ,{
            id: 4,
            name: "SHUTTER ISLAND"
        }
        ,
        {
            id: 5,
            name: "THE CONJUIRING: THE DEVIL MADE ME DO IT"
        }
        ,
        {
            id: 6,
            name: "CITIZEN KANE"
        },
        {
            id:7,
            name: "AVATAR"
        }
    ])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const fuse = new Fuse(movielist, {
          keys: ['name'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);
        if (
          movielist.length > 0 &&
          searchTerm.length >= 0 &&
          results.length > 0
        ) {
          setMobilist(results);
        } else {
          setMobilist(movielist);
        }
      }, [movielist,searchTerm]);
    const searchMovie = (e) =>{
        e.preventDefault();
        console.log("submitted");
    }
    const movie = (item) =>{
        console.log(item);
        localStorage.setItem('moviename',item);
    }
    return (
        <div className="container">
            <h1 className="head">CINEWEST</h1>
            <p className="welcome">
             SELECT MOVIE
           </p>
           <form class="form-inline" onSubmit={searchMovie}>
            <label for="pwd" className="find">FIND MOVIE BY TITLE</label>
            <input
             type="text"
             id="pwd"
             className="searchbox"
             placeholder="search movie by name"
             name="q"
             onChange={(e) => setSearchTerm(e.target.value)}
             />
            <button type="submit" className="src" style={{color:"#064460"}}>Search</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="left">
                {movielist.map((item)=>(
                    <li>
                            <a href="/seat" style={{color:"white",fontSize:"19px"}} onClick={movie(item.name)}>{item.name}</a>
                            <br></br>
                            <br></br>
                    </li>
                    ))}
                </div>
                <div className='right' style={{paddingTop: "6%"}}>
                    <Timer/>
                </div>
            </div>
        </div>
    )
}

export default Search
